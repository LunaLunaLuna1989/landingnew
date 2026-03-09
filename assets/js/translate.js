function translatePage() {
    const userLanguage = navigator.language || navigator.userLanguage;
    const langCode = userLanguage.substring(0, 2).toUpperCase();
    console.log(`Detected Language: ${langCode}`);

    const translations = {
        "EN": {
            "title": "Welcome",
            "subTitle": "Escort for one night, you have numbers and prices from the girls on the site",
            "joinButton": "&mdash; JOIN FREE &mdash;"
        },
        "ES": {
            "title": "Bienvenido",
            "subTitle": "Escort para una noche, tienes números y precios de las chicas en el sitio",
            "joinButton": "&mdash; ÚNETE GRATIS &mdash;"
        },
        "FR": {
            "title": "Bienvenue",
            "subTitle": "Escort pour une nuit, vous avez les números et prix des filles sur le site",
            "joinButton": "&mdash; REJOIGNEZ GRATUITEMENT &mdash;"
        },
        "DE": {
            "title": "Willkommen",
            "subTitle": "Escort für eine Nacht, Sie haben Nummern und Preise von den Mädchen auf der Website",
            "joinButton": "&mdash; KOSTENLOS BEITRETEN &mdash;"
        },
        "IT": {
            "title": "Benvenuto",
            "subTitle": "Escort per una notte, hai numeri e prezzi delle ragazze sul sito",
            "joinButton": "&mdash; UNISCITI GRATIS &mdash;"
        },
        "NL": {
            "title": "Welkom",
            "subTitle": "Escort voor één nacht, je hebt nummers en prijzen van de meisjes op de site",
            "joinButton": "&mdash; DOE GRATIS MEE &mdash;"
        },
        "CS": {
            "title": "VÃ­tejte",
            "subTitle": "Doprovod na jednu noc, máte čísla a ceny od dívek na webu",
            "joinButton": "&mdash; PŘIPOJTE SE ZDARMA &mdash;"
        },
        "PL": {
            "title": "Witamy",
            "subTitle": "Escort na jedną… noc, masz numery i ceny od dziewczyn na stronie",
            "joinButton": "&mdash; DOŁĄCZ ZA DARMO &mdash;"
        },
        "PT": {
            "title": "Bem-vindo",
            "subTitle": "Acompanhante para uma noite, você tem números e preços das meninas no site",
            "joinButton": "&mdash; JUNTE-SE DE GRAÇA &mdash;"
        },
        "FI": {
            "title": "Tervetuloa",
            "subTitle": "Seuralainen yöksi, sinulla on tyttöjen numerot ja hinnat sivustolla",
            "joinButton": "&mdash; LIITY ILMAISEKSI &mdash;"
        },
        "SV": {
            "title": "Välkommen",
            "subTitle": "Escort för en natt, du har nummer och priser från tjejerna på sajten",
            "joinButton": "&mdash; GÅ… MED GRATIS &mdash;"
        },
        "DA": {
            "title": "Velkommen",
            "subTitle": "Escort for en nat, du har telefonnumre og priser fra pigerne på. sitet",
            "joinButton": "&mdash; DELTAG GRATIS &mdash;"
        },
        "NO": {
            "title": "Velkommen",
            "subTitle": "Escort for en natt, du har nummer og priser fra jentene på. siden",
            "joinButton": "&mdash; BLI MED GRATIS &mdash;"
        }

    };

    // Use English as the fallback language
    const translation = translations[langCode] || translations["EN"];

    // Optimize DOM access
    document.getElementById("title").innerHTML = translation.title;
    document.getElementById("sub-title").innerHTML = translation.subTitle;
    document.getElementById("joinButton").innerHTML = translation.joinButton; // Fixed typo (was 'button')
    // document.getElementById("notice").innerHTML = translation.notice;
    // document.getElementById("cta").innerHTML = translation.cta;
    // document.getElementById("countdown-text").innerHTML = translation.countdownText;
}

window.addEventListener("load", translatePage);