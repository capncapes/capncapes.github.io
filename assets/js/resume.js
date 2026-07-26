/**
 * resume.js
 *
 * Reads window.RESUME_DATA (injected at build time from _data/resume.yml via
 * Jekyll's jsonify filter) and renders the active resume version into the page.
 *
 * Version selection:
 *   ?v=marketing-automation-manager   → default
 *   ?v=senior-email-developer
 *   ?v=email-marketing-manager
 *
 * Usage from elsewhere on the site (Liquid):
 *   {% assign data = site.data.resume %}
 *   {{ data.person.name }}, {{ data.versions[0].title }}, etc.
 */

(function () {
  'use strict';

  var data = window.RESUME_DATA;
  if (!data) {
    console.error('resume.js: window.RESUME_DATA is not defined. ' +
      'Ensure the Jekyll template injects {{ site.data.resume | jsonify }}.');
    return;
  }

  /* =========================================================================
     HELPERS
     ========================================================================= */

  /**
   * Build a lookup map of all experience entries keyed by company slug,
   * with each position keyed by position slug.
   *   experienceMap['precept']['senior-email-developer'] → position object
   */
  function buildExperienceMap(experienceList) {
    var map = {};
    experienceList.forEach(function (company) {
      var posMap = {};
      company.positions.forEach(function (pos) {
        posMap[pos.slug] = pos;
      });
      map[company.slug] = { meta: company, positions: posMap };
    });
    return map;
  }

  /**
   * Return the version object matching the ?v= URL param, or the default.
   */
  function resolveVersion(versions) {
    var params = new URLSearchParams(window.location.search);
    var key = params.get('v');
    var match = versions.find(function (v) { return v.key === key; });
    if (match) return match;
    var def = versions.find(function (v) { return v.default; });
    return def || versions[0];
  }

  /**
   * Select bullets from a position by index array, or return all if omitted.
   */
  function selectBullets(allBullets, indices) {
    if (!indices || !indices.length) return allBullets;
    return indices.map(function (i) { return allBullets[i]; }).filter(Boolean);
  }

  /* =========================================================================
     RENDERERS
     ========================================================================= */

  function renderSkillGroup(group) {
    var tags = group.tags.map(function (tag) {
      return '<li>' + escapeHtml(tag) + '</li>';
    }).join('');
    return '<div class="skill">'
      + '<h3>' + escapeHtml(group.heading) + '</h3>'
      + '<ul>' + tags + '</ul>'
      + '</div>';
  }

  function renderCompany(companyMeta, versionPositions, expMap) {
    var positionsHtml = versionPositions.map(function (vPos) {
      var pos = expMap[companyMeta.slug].positions[vPos.slug];
      if (!pos) return '';

      var bullets = selectBullets(pos.bullets, vPos.bullet_indices);
      var bulletHtml = '<ul>'
        + bullets.map(function (b) { return '<li>' + escapeHtml(b) + '</li>'; }).join('')
        + '</ul>';

      return '<div class="position">'
        + '<h4>' + escapeHtml(pos.title) + '</h4>'
        + '<p class="time-served">' + escapeHtml(pos.dates) + '</p>'
        + bulletHtml
        + '</div>';
    }).join('');

    return '<div class="company">'
      + '<h3>' + escapeHtml(companyMeta.company) + '</h3>'
      + positionsHtml
      + '</div>';
  }

  /** Minimal HTML escaping for injected text content. */
  function escapeHtml(str) {
    if (typeof str !== 'string') return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /* =========================================================================
     JSON-LD UPDATE
     ========================================================================= */

  function updateJsonLd(version) {
    var el = document.getElementById('resume-json-ld');
    if (!el) return;
    try {
      var schema = JSON.parse(el.textContent);
      schema.jobTitle = version.title;
      schema.description = version.meta_description.trim();
      el.textContent = JSON.stringify(schema, null, 2);
    } catch (e) {
      console.warn('resume.js: could not update JSON-LD', e);
    }
  }

  /* =========================================================================
     RENDER
     ========================================================================= */

  function render() {
    var version = resolveVersion(data.versions);
    var expMap  = buildExperienceMap(data.experience);

    // ── Page metadata ────────────────────────────────────────────────────────
    document.title = version.title + ' Résumé | Brandon Caples';

    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', version.meta_description.trim());

    // ── Header ───────────────────────────────────────────────────────────────
    var titleEl = document.getElementById('resume-title');
    if (titleEl) titleEl.textContent = version.title;

    var dlLink = document.getElementById('resume-download-link');
    if (dlLink) dlLink.setAttribute('href', version.download_href);

    // ── Summary ──────────────────────────────────────────────────────────────
    var summaryEl = document.getElementById('resume-summary');
    if (summaryEl) summaryEl.textContent = version.summary.trim();

    // ── Skills ───────────────────────────────────────────────────────────────
    var skillsEl = document.getElementById('skills-content');
    if (skillsEl) {
      skillsEl.innerHTML = version.skills.map(renderSkillGroup).join('');
    }

    // ── Experience ───────────────────────────────────────────────────────────
    var expEl = document.getElementById('experience-content');
    if (expEl) {
      expEl.innerHTML = version.experience.map(function (vCompany) {
        var companyEntry = expMap[vCompany.company];
        if (!companyEntry) return '';
        return renderCompany(companyEntry.meta, vCompany.positions, expMap);
      }).join('');
    }

    // ── JSON-LD ──────────────────────────────────────────────────────────────
    updateJsonLd(version);
  }

  /* =========================================================================
     INIT
     ========================================================================= */

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }

})();
