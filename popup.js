document.getElementById('apply-subtitles').addEventListener('click', function() {
    var language = document.getElementById('language-select').value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {language: language});
    });
  });
  