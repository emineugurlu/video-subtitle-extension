chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.language === 'turkish') {
      // Türkçe altyazıyı eklemek için kod
      console.log('Türkçe altyazı ekleniyor');
    } else if (request.language === 'english') {
      // İngilizce altyazıyı eklemek için kod
      console.log('İngilizce altyazı ekleniyor');
    }
  });
  