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
            "subTitle": "Escort para una noche, tienes nÃºmeros y precios de las chicas en el sitio",
            "joinButton": "&mdash; ÃšNETE GRATIS &mdash;"
        },
        "FR": {
            "title": "Bienvenue",
            "subTitle": "Escort pour une nuit, vous avez les numÃ©ros et prix des filles sur le site",
            "joinButton": "&mdash; REJOIGNEZ GRATUITEMENT &mdash;"
        },
        "DE": {
            "title": "Willkommen",
            "subTitle": "Escort fÃ¼r eine Nacht, Sie haben Nummern und Preise von den MÃ¤dchen auf der Website",
            "joinButton": "&mdash; KOSTENLOS BEITRETEN &mdash;"
        },
        "IT": {
            "title": "Benvenuto",
            "subTitle": "Escort per una notte, hai numeri e prezzi delle ragazze sul sito",
            "joinButton": "&mdash; UNISCITI GRATIS &mdash;"
        },
        "NL": {
            "title": "Welkom",
            "subTitle": "Escort voor Ã©Ã©n nacht, je hebt nummers en prijzen van de meisjes op de site",
            "joinButton": "&mdash; DOE GRATIS MEE &mdash;"
        },
        "CS": {
            "title": "VÃ­tejte",
            "subTitle": "Doprovod na jednu noc, mÃ¡te ÄÃ­sla a ceny od dÃ­vek na webu",
            "joinButton": "&mdash; PÅ˜IPOJTE SE ZDARMA &mdash;"
        },
        "PL": {
            "title": "Witamy",
            "subTitle": "Escort na jednÄ… noc, masz numery i ceny od dziewczyn na stronie",
            "joinButton": "&mdash; DOÅÄ„CZ ZA DARMO &mdash;"
        },
        "PT": {
            "title": "Bem-vindo",
            "subTitle": "Acompanhante para uma noite, vocÃª tem nÃºmeros e preÃ§os das meninas no site",
            "joinButton": "&mdash; JUNTE-SE DE GRAÃ‡A &mdash;"
        },
        "FI": {
            "title": "Tervetuloa",
            "subTitle": "Seuralainen yÃ¶ksi, sinulla on tyttÃ¶jen numerot ja hinnat sivustolla",
            "joinButton": "&mdash; LIITY ILMAISEKSI &mdash;"
        },
        "SV": {
            "title": "VÃ¤lkommen",
            "subTitle": "Escort fÃ¶r en natt, du har nummer och priser frÃ¥n tjejerna pÃ¥ sajten",
            "joinButton": "&mdash; GÃ… MED GRATIS &mdash;"
        },
        "DA": {
            "title": "Velkommen",
            "subTitle": "Escort for en nat, du har telefonnumre og priser fra pigerne pÃ¥ sitet",
            "joinButton": "&mdash; DELTAG GRATIS &mdash;"
        },
        "NO": {
            "title": "Velkommen",
            "subTitle": "Escort for en natt, du har nummer og priser fra jentene pÃ¥ siden",
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