export const getBrowserInfo = () => {
    const userAgent = navigator.userAgent;

    let browserName = "Unknown";

    if (userAgent.match(/chrome|chromium|crios/i)) {
        browserName = "Chrome";
    } else if (userAgent.match(/firefox|fxios/i)) {
        browserName = "Firefox";
    } else if (userAgent.match(/safari/i) && !userAgent.match(/chrome|crios|chromium/i)) {
        browserName = "Safari";
    } else if (userAgent.match(/opr\//i)) {
        browserName = "Opera";
    } else if (userAgent.match(/edg/i)) {
        browserName = "Edge";
    } else if (userAgent.match(/msie|trident/i)) {
        browserName = "Internet Explorer";
    }

    return {
        browserName,
        userAgent,
    };
};
