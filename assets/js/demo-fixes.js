/**
 * demo-fixes.js
 * -----------------------------------------------------------------
 * This file exists because two forms in this template ship with NO
 * backend: the property search form and the newsletter signup form.
 * Left as-is, clicking "Search" or "Subscribe" reloads the page and
 * does nothing — which looks broken in front of a client.
 *
 * This script intercepts those specific forms and shows an honest
 * "coming soon" message instead of a silent failure.
 *
 * IMPORTANT: This is a stopgap for demo purposes only. Before real
 * launch, replace this with actual search/subscribe functionality
 * (see the audit report for what real estate CMS/DB you'll need).
 * -----------------------------------------------------------------
 */
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("form.demo-noop-form").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let msg = form.querySelector(".demo-noop-msg");
      if (!msg) {
        msg = document.createElement("div");
        msg.className = "demo-noop-msg";
        msg.style.cssText =
          "margin-top:10px;padding:10px 14px;background:#fff3cd;color:#664d03;" +
          "border:1px solid #ffe69c;border-radius:6px;font-size:14px;";
        msg.textContent = "This is a demo preview — this feature will be connected when the site goes live.";
        form.appendChild(msg);
      }
      setTimeout(function () {
        if (msg && msg.parentNode) msg.remove();
      }, 4000);
    });
  });
});
