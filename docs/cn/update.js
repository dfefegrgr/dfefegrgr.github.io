function updateContent(appIntroTitle, appIntroText, useMethodTitle, useMethodText) {
    const appIntroHeading = document.getElementById('app-intro-heading');
    const appIntroContent = document.getElementById('app-intro-content');
    const useMethodHeading = document.getElementById('use-method-heading');
    const useMethodContent = document.getElementById('use-method-content');

    appIntroHeading.innerHTML = appIntroTitle;
    appIntroContent.innerHTML = appIntroText;
    useMethodHeading.innerHTML = useMethodTitle;
    useMethodContent.innerHTML = useMethodText;
}