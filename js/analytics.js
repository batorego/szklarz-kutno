// Google Analytics initialization
export function initAnalytics() {
    // Create script elements
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-KBB4M678QG";

    const script2 = document.createElement('script');
    script2.textContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-KBB4M678QG');
    `;

    // Append scripts to document head
    document.head.appendChild(script1);
    document.head.appendChild(script2);
}