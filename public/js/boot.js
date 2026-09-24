// Promote non-critical stylesheets (loaded as media="print") once they arrive; CSP-safe replacement for inline onload handlers.
document.querySelectorAll('link[data-async-css]').forEach(function(link){
  function apply(){ link.media = 'all'; }
  if(link.sheet) apply(); else link.addEventListener('load', apply, { once: true });
});
