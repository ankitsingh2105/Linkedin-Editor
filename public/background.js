chrome.runtime.onInstalled.addListener(() => {
    chrome.notifications.create("reviewReminder", {
      type: "basic",
      iconUrl: "icon-48.png",
      title: "LinkedIn Editor - rate us",
      message: "Click here and give us a rating, it takes only 10 seconds! 🎉 Also, we are reaching 100 users soon!!",
      priority: 2
    });
  });

  chrome.notifications.onClicked.addListener((notificationId) => {
    if (notificationId === "reviewReminder") {
      chrome.tabs.create({ url: "https://chromewebstore.google.com/detail/linkedin-editor/dpbccjhabjmnohefgjoongadmjpanfmd/reviews" });
    }
  });
  