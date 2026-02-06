const pattern = /ai overview/i;

const mutObserver = new MutationObserver(()=>{

    // Remove Main AI Overview //
    const mainBody = document.querySelector("div#rcnt");
    const overviewText = [...mainBody?.querySelectorAll("h1, h2")].find((item) =>
        pattern.test(item.innerText)
    );

    let aiOverview = overviewText?.closest("div#rso > div");
    if (!aiOverview) aiOverview = overviewText?.closest("div#rcnt > div");
    if (aiOverview) {
        aiOverview.style.display = 'none';
        console.log('Overview hidden');
    }

    // Remove AI mode tab //
    const tabsList = document.querySelector('[role="list"]').children;
    const aiModeTab = tabsList[0];

    const text = aiModeTab.innerText.trim();

    if (/^AI Mode$/i.test(text)) {
        aiModeTab.style.display = "none";
    }   

});

mutObserver.observe(document, {
    childList: true,
    subtree: true,
});