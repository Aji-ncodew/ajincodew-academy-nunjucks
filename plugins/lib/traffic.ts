export default function getTraffic() {
    const query = new URLSearchParams(window.location.search);
    const utmSource = query.get("utm_source");
    const utmMedium = query.get("utm_medium");
    const utmCampaign = query.get("utm_campaign");
    const utmContent = query.get("utm_content");
    const utmTerm = query.get("utm_term");
    const source = query.get("source");
    const refferer = document.referrer;
    return {
        utmSource,
        utmMedium,
        utmCampaign,
        utmContent,
        utmTerm,
        source,
        refferer
    }
}