export const meals = [
    // Snídaně (7 jídel)
    {
        id: 1,
        name: 'Řecký jogurt s medem a ořechy',
        category: 'Breakfast',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '5 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Řecký jogurt', amount: '200 g' },
            { name: 'Med', amount: '1 lžíce' },
            { name: 'Vlašské ořechy', amount: '20 g' },
            { name: 'Skořice', amount: 'špetka' }
        ]
    },
    {
        id: 2,
        name: 'Shakshuka s fetou',
        category: 'Breakfast',
        image: 'https://images.unsplash.com/photo-1587486937773-f8c1c2b2e8d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '25 min',
        difficulty: 'Střední',
        kidFriendly: false,
        ingredients: [
            { name: 'Drcená rajčata', amount: '200 g' },
            { name: 'Vejce', amount: '2 ks' },
            { name: 'Feta sýr', amount: '50 g' },
            { name: 'Cibule', amount: '1/2 ks' },
            { name: 'Červená paprika', amount: '1/2 ks' },
            { name: 'Česnek', amount: '1 stroužek' },
            { name: 'Olivový olej', amount: '1 lžíce' },
            { name: 'Římský kmín', amount: '1/2 lžičky' }
        ]
    },
    {
        id: 3,
        name: 'Středomořská omeleta',
        category: 'Breakfast',
        image: 'https://images.unsplash.com/photo-1525351484163-7529414395d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '15 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Vejce', amount: '3 ks' },
            { name: 'Cherry rajčata', amount: '6 ks' },
            { name: 'Černé olivy', amount: '30 g' },
            { name: 'Feta sýr', amount: '40 g' },
            { name: 'Olivový olej', amount: '1 lžíce' },
            { name: 'Oregano', amount: 'špetka' }
        ]
    },
    {
        id: 4,
        name: 'Celozrnný toast s avokádem',
        category: 'Breakfast',
        image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '10 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Celozrnný chléb', amount: '2 plátky' },
            { name: 'Zralé avokádo', amount: '1/2 ks' },
            { name: 'Cherry rajčata', amount: '4 ks' },
            { name: 'Citrónová šťáva', amount: '1 lžička' },
            { name: 'Olivový olej', amount: '1 lžička' },
            { name: 'Sůl a pepř', amount: 'dle chuti' }
        ]
    },
    {
        id: 5,
        name: 'Granola s ovocem a jogurtem',
        category: 'Breakfast',
        image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '5 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Domácí granola', amount: '60 g' },
            { name: 'Řecký jogurt', amount: '150 g' },
            { name: 'Čerstvé ovoce (jahody, borůvky)', amount: '100 g' },
            { name: 'Med', amount: '1 lžička' }
        ]
    },
    {
        id: 6,
        name: 'Turecký menemen',
        category: 'Breakfast',
        image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '20 min',
        difficulty: 'Střední',
        kidFriendly: false,
        ingredients: [
            { name: 'Vejce', amount: '2 ks' },
            { name: 'Rajčato', amount: '1 ks' },
            { name: 'Zelená paprika', amount: '1 ks' },
            { name: 'Cibule', amount: '1/2 ks' },
            { name: 'Máslo nebo olej', amount: '1 lžíce' },
            { name: 'Chilli vločky (Aleppo)', amount: '1/2 lžičky' }
        ]
    },
    {
        id: 7,
        name: 'Toast s fíky a ricottou',
        category: 'Breakfast',
        image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '10 min',
        difficulty: 'Snadné',
        kidFriendly: false,
        ingredients: [
            { name: 'Kváskový chléb', amount: '2 plátky' },
            { name: 'Ricotta', amount: '80 g' },
            { name: 'Čerstvé fíky', amount: '2 ks' },
            { name: 'Med', amount: '1 lžíce' },
            { name: 'Nasekané pistácie', amount: '1 lžička' }
        ]
    },

    // Oběd (7 jídel)
    {
        id: 8,
        name: 'Středomořský salát s kuřetem',
        category: 'Lunch',
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '20 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Grilované kuřecí prsa', amount: '150 g' },
            { name: 'Salátová okurka', amount: '1/2 ks' },
            { name: 'Rajčat', amount: '2 ks' },
            { name: 'Feta sýr', amount: '60 g' },
            { name: 'Olivy kalamata', amount: '30 g' },
            { name: 'Červená cibule', amount: '1/4 ks' },
            { name: 'Olivový olej a oregano', amount: '2 lžíce' }
        ]
    },
    {
        id: 9,
        name: 'Wrap s hummusem a falafelem',
        category: 'Lunch',
        image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '20 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Arabský chléb/Pita', amount: '1 ks' },
            { name: 'Falafel', amount: '4 ks' },
            { name: 'Hummus', amount: '3 lžíce' },
            { name: 'Ledový salát', amount: 'hrst' },
            { name: 'Rajče', amount: '1/2 ks' },
            { name: 'Tahini dresing', amount: '1 lžíce' }
        ]
    },
    {
        id: 10,
        name: 'Tabbouleh s grilovaným halloumi',
        category: 'Lunch',
        image: 'https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '25 min',
        difficulty: 'Snadné',
        kidFriendly: false,
        ingredients: [
            { name: 'Bulgur (suchý)', amount: '50 g' },
            { name: 'Sýr Halloumi', amount: '100 g' },
            { name: 'Hladkolistá petržel', amount: 'velký svazek' },
            { name: 'Čerstvá máta', amount: 'hrst' },
            { name: 'Rajčata', amount: '2 ks' },
            { name: 'Citrónová šťáva', amount: 'z 1/2 citronu' },
            { name: 'Olivový olej', amount: '2 lžíce' }
        ]
    },
    {
        id: 11,
        name: 'Libanonská čočková polévka',
        category: 'Lunch',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '35 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Červená čočka', amount: '80 g' },
            { name: 'Cibule', amount: '1/2 ks' },
            { name: 'Mrkev', amount: '1 ks' },
            { name: 'Česnek', amount: '1 stroužek' },
            { name: 'Citron', amount: '1/2 ks' },
            { name: 'Římský kmín', amount: '1/2 lžičky' },
            { name: 'Zeleninový vývar', amount: '400 ml' }
        ]
    },
    {
        id: 12,
        name: 'Caprese ciabatta',
        category: 'Lunch',
        image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '10 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Ciabatta pečivo', amount: '1 ks' },
            { name: 'Mozzarella', amount: '100 g' },
            { name: 'Rajče', amount: '1 ks' },
            { name: 'Čerstvá bazalka', amount: '6 lístků' },
            { name: 'Pesto', amount: '1 lžíce' },
            { name: 'Rukola', amount: 'hrst' }
        ]
    },
    {
        id: 13,
        name: 'Quinoa tabbouleh miska',
        category: 'Lunch',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '20 min',
        difficulty: 'Snadné',
        kidFriendly: false,
        ingredients: [
            { name: 'Quinoa (uvařená)', amount: '150 g' },
            { name: 'Petrželka', amount: 'svazek' },
            { name: 'Cizrna', amount: '100 g' },
            { name: 'Salátová okurka', amount: '1/3 ks' },
            { name: 'Cherry rajčata', amount: '8 ks' },
            { name: 'Dresing (citron+olej)', amount: '2 lžíce' }
        ]
    },
    {
        id: 14,
        name: 'Salát s bílými fazolemi a tuňákem',
        category: 'Lunch',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '15 min',
        difficulty: 'Snadné',
        kidFriendly: false,
        ingredients: [
            { name: 'Bílé fazole (konzerva)', amount: '200 g' },
            { name: 'Tuňák v oleji', amount: '100 g' },
            { name: 'Červená cibule', amount: '1/4 ks' },
            { name: 'Rukola nebo polníček', amount: 'hrst' },
            { name: 'Citrónová šťáva', amount: '1 lžíce' },
            { name: 'Extra panenský olivový olej', amount: '1 lžíce' }
        ]
    },

    // Večeře (14 jídel)
    {
        id: 15,
        name: 'Grilovaný mořský vlk',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a7270028d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '30 min',
        difficulty: 'Střední',
        kidFriendly: false,
        ingredients: [
            { name: 'Filet z mořského vlka', amount: '1 ks (150-200g)' },
            { name: 'Citron', amount: '1/2 ks' },
            { name: 'Čerstvý rozmarýn', amount: '1 větvička' },
            { name: 'Vařené brambory', amount: '150 g' },
            { name: 'Česnek', amount: '1 stroužek' },
            { name: 'Olivový olej', amount: '1 lžíce' }
        ]
    },
    {
        id: 16,
        name: 'Musaka (2 porce)',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '90 min',
        difficulty: 'Těžké',
        kidFriendly: false,
        ingredients: [
            { name: 'Lilek', amount: '1 velký' },
            { name: 'Mleté maso (jehněčí/hovězí)', amount: '250 g' },
            { name: 'Krájená rajčata', amount: '200 g' },
            { name: 'Bešamel', amount: '200 ml' },
            { name: 'Cibule', amount: '1 ks' },
            { name: 'Skořice', amount: 'špetka' },
            { name: 'Brambory (volitelné)', amount: '1 ks' }
        ]
    },
    {
        id: 17,
        name: 'Kuřecí souvlaki s tzatziki',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '40 min',
        difficulty: 'Střední',
        kidFriendly: true,
        ingredients: [
            { name: 'Kuřecí maso', amount: '150 g' },
            { name: 'Řecký jogurt', amount: '100 g' },
            { name: 'Salátová okurka', amount: '1/3 ks' },
            { name: 'Česnek', amount: '2 stroužky' },
            { name: 'Citron', amount: '1/2 ks' },
            { name: 'Pita chléb', amount: '1 ks' },
            { name: 'Oregano', amount: '1 lžička' }
        ]
    },
    {
        id: 18,
        name: 'Těstoviny puttanesca',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1621996346529-62886c57f201?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '25 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Špagety (suché)', amount: '80-100 g' },
            { name: 'Krájená rajčata', amount: '200 g' },
            { name: 'Černé olivy', amount: 'hrst' },
            { name: 'Kapary', amount: '1 lžíce' },
            { name: 'Ančovičky (sardele)', amount: '2 filety' },
            { name: 'Česnek', amount: '1 stroužek' },
            { name: 'Chilli', amount: 'dle chuti' }
        ]
    },
    {
        id: 19,
        name: 'Pečená treska s rajčaty a olivami',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1580959375944-0b6e7f0d3a8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '35 min',
        difficulty: 'Snadné',
        kidFriendly: false,
        ingredients: [
            { name: 'Filet z tresky', amount: '150 g' },
            { name: 'Cherry rajčata', amount: '10 ks' },
            { name: 'Olivy kalamata', amount: '30 g' },
            { name: 'Cuketa', amount: '1/2 ks' },
            { name: 'Česnek', amount: '1 stroužek' },
            { name: 'Oregano', amount: '1 lžička' }
        ]
    },
    {
        id: 20,
        name: 'Jehněčí kofta s kuskusem',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '45 min',
        difficulty: 'Střední',
        kidFriendly: false,
        ingredients: [
            { name: 'Mleté jehněčí/hovězí', amount: '150 g' },
            { name: 'Kuskus (suchý)', amount: '60 g' },
            { name: 'Cibule', amount: '1/2 ks' },
            { name: 'Čerstvý koriandr', amount: 'hrst' },
            { name: 'Římský kmín', amount: '1/2 lžičky' },
            { name: 'Mletá paprika', amount: '1/2 lžičky' },
            { name: 'Bílý jogurt', amount: '2 lžíce' }
        ]
    },
    {
        id: 21,
        name: 'Lilek parmigiana (2 porce)',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '60 min',
        difficulty: 'Střední',
        kidFriendly: true,
        ingredients: [
            { name: 'Lilek', amount: '1 velký' },
            { name: 'Rajčatová omáčka', amount: '300 g' },
            { name: 'Mozzarella', amount: '125 g' },
            { name: 'Parmezán', amount: '40 g' },
            { name: 'Čerstvá bazalka', amount: 'hrst' },
            { name: 'Olivový olej', amount: '2 lžíce' }
        ]
    },
    {
        id: 22,
        name: 'Paella (2 porce)',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1534080564583-6be75777b70a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '50 min',
        difficulty: 'Těžké',
        kidFriendly: false,
        ingredients: [
            { name: 'Rýže (krátkozrnná)', amount: '150 g' },
            { name: 'Kuřecí/krevety/slávky', amount: '200 g' },
            { name: 'Hrášek', amount: '50 g' },
            { name: 'Šafrán nebo kurkuma', amount: 'špetka' },
            { name: 'Paprika', amount: '1/2 ks' },
            { name: 'Vývar', amount: '400 ml' },
            { name: 'Citron', amount: '1 ks' }
        ]
    },
    {
        id: 23,
        name: 'Plněné papriky (2 porce)',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '55 min',
        difficulty: 'Střední',
        kidFriendly: true,
        ingredients: [
            { name: 'Papriky', amount: '2 ks' },
            { name: 'Rýže (uvařená)', amount: '150 g' },
            { name: 'Mleté maso', amount: '150 g' },
            { name: 'Rajčatová omáčka', amount: '200 ml' },
            { name: 'Cibule', amount: '1/2 ks' },
            { name: 'Bylinky (petržel)', amount: '1 lžíce' }
        ]
    },
    {
        id: 24,
        name: 'Grilované sardinky',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '20 min',
        difficulty: 'Snadné',
        kidFriendly: false,
        ingredients: [
            { name: 'Sardinky (čerstvé/mražené)', amount: '200 g' },
            { name: 'Citron', amount: '1 ks' },
            { name: 'Extra panenský olivový olej', amount: '2 lžíce' },
            { name: 'Česnek', amount: '1 stroužek' },
            { name: 'Hladkolistá petržel', amount: 'hrst' },
            { name: 'Mořská sůl', amount: 'dle chuti' }
        ]
    },
    {
        id: 25,
        name: 'Ratatouille (2 porce)',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '45 min',
        difficulty: 'Střední',
        kidFriendly: true,
        ingredients: [
            { name: 'Lilek', amount: '1/2 ks' },
            { name: 'Cuketa', amount: '1 ks' },
            { name: 'Paprika', amount: '1 ks' },
            { name: 'Rajčata', amount: '2 ks' },
            { name: 'Cibule', amount: '1 ks' },
            { name: 'Česnek', amount: '2 stroužky' },
            { name: 'Provensálské koření', amount: '1 lžička' }
        ]
    },
    {
        id: 26,
        name: 'Krevety s cuketovými nudlemi',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1633504581786-316c8002b1b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '25 min',
        difficulty: 'Snadné',
        kidFriendly: false,
        ingredients: [
            { name: 'Krevety', amount: '150 g' },
            { name: 'Cuketa (na nudle)', amount: '1-2 ks' },
            { name: 'Česnek', amount: '2 stroužky' },
            { name: 'Bílé víno (volitelné)', amount: '50 ml' },
            { name: 'Máslo', amount: '1 lžíce' },
            { name: 'Chilli vločky', amount: 'špetka' },
            { name: 'Petrželka', amount: '1 lžíce' }
        ]
    },
    {
        id: 27,
        name: 'Kuřecí tažín s meruňkami (2 porce)',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '70 min',
        difficulty: 'Střední',
        kidFriendly: false,
        ingredients: [
            { name: 'Kuřecí stehna', amount: '2-3 ks' },
            { name: 'Sušené meruňky', amount: '50 g' },
            { name: 'Cibule', amount: '1 ks' },
            { name: 'Plátkové mandle', amount: '20 g' },
            { name: 'Skořice a zázvor', amount: 'po 1/2 lžičky' },
            { name: 'Med', amount: '1 lžíce' },
            { name: 'Kuskus jako příloha', amount: '100 g' }
        ]
    },
    {
        id: 28,
        name: 'Špagety aglio e olio',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '20 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Špagety (suché)', amount: '100 g' },
            { name: 'Česnek', amount: '3 stroužky' },
            { name: 'Kvalitní olivový olej', amount: '4 lžíce' },
            { name: 'Chilli paprička', amount: '1/2 ks' },
            { name: 'Hladkolistá petržel', amount: 'hrst' },
            { name: 'Parmezán (volitelný)', amount: '20 g' }
        ]
    },

    // Svačina (7 položek)
    {
        id: 29,
        name: 'Hummus se zeleninou',
        category: 'Snack',
        image: 'https://images.unsplash.com/photo-1621447504864-d8686e12698c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '5 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Hummus', amount: '80 g' },
            { name: 'Mrkev', amount: '1 ks' },
            { name: 'Salátová okurka', amount: '1/3 ks' },
            { name: 'Řapíkatý celer', amount: '1 stonek' }
        ]
    },
    {
        id: 30,
        name: 'Marinované olivy a feta',
        category: 'Snack',
        image: 'https://images.unsplash.com/photo-1452251889946-8ff5ea7f27f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '5 min',
        difficulty: 'Snadné',
        kidFriendly: false,
        ingredients: [
            { name: 'Zelené/černé olivy', amount: '60 g' },
            { name: 'Feta sýr', amount: '40 g' },
            { name: 'Olivový olej', amount: '1 lžička' },
            { name: 'Oregano nebo tymián', amount: 'špetka' }
        ]
    },
    {
        id: 31,
        name: 'Datle plněné ořechovým máslem',
        category: 'Snack',
        image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '10 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Medjool datle', amount: '3-4 ks' },
            { name: 'Mandlové/arašídové máslo', amount: '2 lžičky' },
            { name: 'Hořká čokoláda', amount: '10 g' },
            { name: 'Mořská sůl', amount: 'špetka' }
        ]
    },
    {
        id: 32,
        name: 'Bruschetta s rajčaty',
        category: 'Snack',
        image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '15 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Plátky bagety', amount: '3 ks' },
            { name: 'Zralá rajčata', amount: '2 ks' },
            { name: 'Česnek', amount: '1 stroužek' },
            { name: 'Bazalka', amount: 'čerstvá' },
            { name: 'Olivový olej', amount: '1 lžíce' }
        ]
    },
    {
        id: 33,
        name: 'Křupavá pečená cizrna',
        category: 'Snack',
        image: 'https://images.unsplash.com/photo-1587486937773-f8c1c2b2e8d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '30 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Cizrna (okapaná)', amount: '150 g' },
            { name: 'Olivový olej', amount: '1 lžíce' },
            { name: 'Uzená paprika', amount: '1/2 lžičky' },
            { name: 'Sůl', amount: 'špetka' }
        ]
    },
    {
        id: 34,
        name: 'Tzatziki dip s pitou',
        category: 'Snack',
        image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '10 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Řecký jogurt', amount: '100 g' },
            { name: 'Okurka', amount: '1/3 ks' },
            { name: 'Česnek', amount: '1 stroužek' },
            { name: 'Olivový olej', amount: '1 lžička' },
            { name: 'Pita chléb', amount: '1 ks' }
        ]
    },
    {
        id: 35,
        name: 'Ovocný salát s mátou',
        category: 'Snack',
        image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '5 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Meloun/jahody/hrozny', amount: '200 g' },
            { name: 'Med', amount: '1 lžička' },
            { name: 'Lístky máty', amount: '1 lžíce' },
            { name: 'Limetková šťáva', amount: '1 lžička' }
        ]
    },

    // České pokrmy - Hlavní jídla
    {
        id: 36,
        name: 'Kuře na mrkvi s rýží',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '50 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Kuřecí maso', amount: '400 g' },
            { name: 'Mrkev', amount: '3 ks' },
            { name: 'Cibule', amount: '1 ks' },
            { name: 'Rýže', amount: '200 g' },
            { name: 'Sůl, pepř', amount: 'dle chuti' }
        ]
    },
    {
        id: 37,
        name: 'Rizoto',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1476124369491-c4cc9b41b4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '35 min',
        difficulty: 'Střední',
        kidFriendly: true,
        ingredients: [
            { name: 'Rýže arborio', amount: '200 g' },
            { name: 'Vývar', amount: '800 ml' },
            { name: 'Cibule', amount: '1 ks' },
            { name: 'Bílé víno', amount: '100 ml' },
            { name: 'Parmezán', amount: '50 g' },
            { name: 'Máslo', amount: '30 g' }
        ]
    },
    {
        id: 38,
        name: 'Kuřecí prsa s kuskusem, paprika a hummus (Jamie O)',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '30 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Kuřecí prsa', amount: '300 g' },
            { name: 'Kuskus', amount: '150 g' },
            { name: 'Paprika', amount: '2 ks' },
            { name: 'Hummus', amount: '100 g' },
            { name: 'Olivový olej', amount: '2 lžíce' }
        ]
    },
    {
        id: 39,
        name: 'Špagety Carbonara',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '25 min',
        difficulty: 'Střední',
        kidFriendly: true,
        ingredients: [
            { name: 'Špagety', amount: '200 g' },
            { name: 'Slanina/pancetta', amount: '150 g' },
            { name: 'Vejce', amount: '3 ks' },
            { name: 'Parmezán', amount: '80 g' },
            { name: 'Pepř', amount: 'dle chuti' }
        ]
    },
    {
        id: 40,
        name: 'Špagety se slaninou a špenátem',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '25 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Špagety', amount: '200 g' },
            { name: 'Slanina', amount: '150 g' },
            { name: 'Špenát', amount: '200 g' },
            { name: 'Česnek', amount: '2 stroužky' },
            { name: 'Smetana', amount: '100 ml' }
        ]
    },
    {
        id: 41,
        name: 'Švédské masové koule, bramborová kaše',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '45 min',
        difficulty: 'Střední',
        kidFriendly: true,
        ingredients: [
            { name: 'Mleté maso', amount: '400 g' },
            { name: 'Brambory', amount: '600 g' },
            { name: 'Smetana', amount: '200 ml' },
            { name: 'Cibule', amount: '1 ks' },
            { name: 'Máslo', amount: '50 g' }
        ]
    },
    {
        id: 42,
        name: 'Bramborové placky, špenát',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1568158879083-c42860933ed7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '40 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Brambory', amount: '800 g' },
            { name: 'Vejce', amount: '2 ks' },
            { name: 'Mouka', amount: '3 lžíce' },
            { name: 'Česnek', amount: '2 stroužky' },
            { name: 'Špenát', amount: '300 g' }
        ]
    },
    {
        id: 43,
        name: 'Kuře na paprice + noky',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '50 min',
        difficulty: 'Střední',
        kidFriendly: true,
        ingredients: [
            { name: 'Kuřecí maso', amount: '500 g' },
            { name: 'Paprika', amount: '2 lžíce' },
            { name: 'Smetana', amount: '200 ml' },
            { name: 'Cibule', amount: '2 ks' },
            { name: 'Noky', amount: '400 g' }
        ]
    },
    {
        id: 44,
        name: 'Cizrna na paprice',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '35 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Cizrna', amount: '400 g' },
            { name: 'Paprika', amount: '1 lžíce' },
            { name: 'Rajčata', amount: '400 g' },
            { name: 'Cibule', amount: '1 ks' },
            { name: 'Česnek', amount: '2 stroužky' }
        ]
    },
    {
        id: 45,
        name: 'Guláš (Zemanová)',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '120 min',
        difficulty: 'Střední',
        kidFriendly: true,
        ingredients: [
            { name: 'Hovězí maso', amount: '600 g' },
            { name: 'Cibule', amount: '3 ks' },
            { name: 'Paprika', amount: '2 lžíce' },
            { name: 'Rajčatový protlak', amount: '2 lžíce' },
            { name: 'Kmín', amount: '1 lžička' }
        ]
    },
    {
        id: 46,
        name: 'Guláš (Dita P. dětem)',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '90 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Vepřové maso', amount: '500 g' },
            { name: 'Cibule', amount: '2 ks' },
            { name: 'Paprika', amount: '1 lžíce' },
            { name: 'Rajčata', amount: '200 g' },
            { name: 'Brambory', amount: '400 g' }
        ]
    },
    {
        id: 47,
        name: 'Kuře s kořenovou zeleninou',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '60 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Kuřecí maso', amount: '500 g' },
            { name: 'Mrkev', amount: '3 ks' },
            { name: 'Petržel', amount: '2 ks' },
            { name: 'Celer', amount: '1/2 ks' },
            { name: 'Cibule', amount: '1 ks' }
        ]
    },
    {
        id: 48,
        name: 'Rizoto s mrazenou zeleninou',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1476124369491-c4cc9b41b4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '30 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Rýže arborio', amount: '200 g' },
            { name: 'Mražená zelenina', amount: '300 g' },
            { name: 'Vývar', amount: '800 ml' },
            { name: 'Cibule', amount: '1 ks' },
            { name: 'Parmezán', amount: '50 g' }
        ]
    },
    {
        id: 49,
        name: 'Quiche',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '60 min',
        difficulty: 'Střední',
        kidFriendly: true,
        ingredients: [
            { name: 'Listové těsto', amount: '1 ks' },
            { name: 'Vejce', amount: '4 ks' },
            { name: 'Smetana', amount: '200 ml' },
            { name: 'Sýr', amount: '150 g' },
            { name: 'Šunka/zelenina', amount: '200 g' }
        ]
    },
    {
        id: 50,
        name: 'Losos s grilovanou zeleninou',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a7270028d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '30 min',
        difficulty: 'Snadné',
        kidFriendly: false,
        ingredients: [
            { name: 'Losos', amount: '300 g' },
            { name: 'Cuketa', amount: '1 ks' },
            { name: 'Paprika', amount: '2 ks' },
            { name: 'Olivový olej', amount: '2 lžíce' },
            { name: 'Citron', amount: '1 ks' }
        ]
    },
    {
        id: 51,
        name: 'Losos s omáčkou (Superjídlo pro super děti)',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '25 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Losos', amount: '300 g' },
            { name: 'Smetana', amount: '150 ml' },
            { name: 'Kopr', amount: '1 lžíce' },
            { name: 'Citron', amount: '1/2 ks' },
            { name: 'Brambory', amount: '400 g' }
        ]
    },
    {
        id: 52,
        name: 'Zapečené těstoviny',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '45 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Těstoviny', amount: '300 g' },
            { name: 'Rajčatová omáčka', amount: '400 g' },
            { name: 'Sýr', amount: '200 g' },
            { name: 'Mleté maso', amount: '300 g' },
            { name: 'Cibule', amount: '1 ks' }
        ]
    },
    {
        id: 53,
        name: 'Zapečené ebly (Zemanová)',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '40 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Ebly', amount: '250 g' },
            { name: 'Zelenina', amount: '300 g' },
            { name: 'Sýr', amount: '150 g' },
            { name: 'Smetana', amount: '100 ml' },
            { name: 'Vejce', amount: '2 ks' }
        ]
    },
    {
        id: 54,
        name: 'Rajská omáčka (Dita P)',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1621996346529-62886c57f201?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '40 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Hovězí maso', amount: '400 g' },
            { name: 'Rajčatový protlak', amount: '3 lžíce' },
            { name: 'Cibule', amount: '1 ks' },
            { name: 'Mouka', amount: '2 lžíce' },
            { name: 'Rýže', amount: '200 g' }
        ]
    },
    {
        id: 55,
        name: 'Paprikáš (Dita P)',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '50 min',
        difficulty: 'Střední',
        kidFriendly: true,
        ingredients: [
            { name: 'Kuřecí/vepřové maso', amount: '500 g' },
            { name: 'Paprika', amount: '2 lžíce' },
            { name: 'Smetana', amount: '200 ml' },
            { name: 'Cibule', amount: '2 ks' },
            { name: 'Noky/knedlíky', amount: '400 g' }
        ]
    },
    {
        id: 56,
        name: 'Roštěná (Dita P)',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '30 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Hovězí maso', amount: '400 g' },
            { name: 'Cibule', amount: '2 ks' },
            { name: 'Rajčatový protlak', amount: '2 lžíce' },
            { name: 'Mouka', amount: '1 lžíce' },
            { name: 'Brambory', amount: '500 g' }
        ]
    },
    {
        id: 57,
        name: 'Čouračka',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '45 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Vepřové maso', amount: '500 g' },
            { name: 'Cibule', amount: '2 ks' },
            { name: 'Česnek', amount: '3 stroužky' },
            { name: 'Paprika', amount: '1 lžíce' },
            { name: 'Brambory', amount: '500 g' }
        ]
    },
    {
        id: 58,
        name: 'Zapečená řepa (Dita P.)',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1568158879083-c42860933ed7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '60 min',
        difficulty: 'Snadné',
        kidFriendly: false,
        ingredients: [
            { name: 'Červená řepa', amount: '600 g' },
            { name: 'Sýr', amount: '150 g' },
            { name: 'Smetana', amount: '100 ml' },
            { name: 'Česnek', amount: '2 stroužky' },
            { name: 'Olivový olej', amount: '2 lžíce' }
        ]
    },
    {
        id: 59,
        name: 'Řízky',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '30 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Vepřové/kuřecí maso', amount: '400 g' },
            { name: 'Vejce', amount: '2 ks' },
            { name: 'Mouka', amount: '100 g' },
            { name: 'Strouhanka', amount: '150 g' },
            { name: 'Brambory', amount: '500 g' }
        ]
    },
    {
        id: 60,
        name: 'Hovězí po burgundsku (Dita P)',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '150 min',
        difficulty: 'Těžké',
        kidFriendly: false,
        ingredients: [
            { name: 'Hovězí maso', amount: '600 g' },
            { name: 'Červené víno', amount: '300 ml' },
            { name: 'Slanina', amount: '100 g' },
            { name: 'Cibule', amount: '2 ks' },
            { name: 'Mrkev', amount: '2 ks' }
        ]
    },
    {
        id: 61,
        name: 'Vepřové v mrkvi (Pradobroty)',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '90 min',
        difficulty: 'Střední',
        kidFriendly: true,
        ingredients: [
            { name: 'Vepřové maso', amount: '600 g' },
            { name: 'Mrkev', amount: '4 ks' },
            { name: 'Cibule', amount: '1 ks' },
            { name: 'Smetana', amount: '150 ml' },
            { name: 'Knedlíky', amount: '400 g' }
        ]
    },
    {
        id: 62,
        name: 'Pečená krkovice, červené zelí, noky',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '120 min',
        difficulty: 'Střední',
        kidFriendly: true,
        ingredients: [
            { name: 'Vepřová krkovice', amount: '800 g' },
            { name: 'Červené zelí', amount: '500 g' },
            { name: 'Noky', amount: '400 g' },
            { name: 'Cibule', amount: '1 ks' },
            { name: 'Kmín', amount: '1 lžička' }
        ]
    },
    {
        id: 63,
        name: 'Špecle zapečené se špenátem, smetanou a sýrem',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '45 min',
        difficulty: 'Střední',
        kidFriendly: true,
        ingredients: [
            { name: 'Špecle', amount: '400 g' },
            { name: 'Špenát', amount: '300 g' },
            { name: 'Smetana', amount: '200 ml' },
            { name: 'Sýr', amount: '150 g' },
            { name: 'Česnek', amount: '2 stroužky' }
        ]
    },
    {
        id: 64,
        name: 'Tortilly',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '30 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Tortilla placky', amount: '4 ks' },
            { name: 'Kuřecí/hovězí maso', amount: '300 g' },
            { name: 'Paprika', amount: '2 ks' },
            { name: 'Sýr', amount: '150 g' },
            { name: 'Salsa', amount: '100 g' }
        ]
    },
    {
        id: 65,
        name: 'Sekaná',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '75 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Mleté maso', amount: '500 g' },
            { name: 'Vejce', amount: '2 ks' },
            { name: 'Rohlík', amount: '2 ks' },
            { name: 'Česnek', amount: '2 stroužky' },
            { name: 'Brambory', amount: '500 g' }
        ]
    },
    {
        id: 66,
        name: 'Langoše',
        category: 'Snack',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '90 min',
        difficulty: 'Střední',
        kidFriendly: true,
        ingredients: [
            { name: 'Mouka', amount: '500 g' },
            { name: 'Droždí', amount: '20 g' },
            { name: 'Mléko', amount: '250 ml' },
            { name: 'Česnek', amount: '3 stroužky' },
            { name: 'Sýr', amount: '100 g' }
        ]
    },
    {
        id: 67,
        name: 'Boloňská',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1621996346529-62886c57f201?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '60 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Mleté maso', amount: '400 g' },
            { name: 'Rajčata', amount: '400 g' },
            { name: 'Cibule', amount: '1 ks' },
            { name: 'Mrkev', amount: '1 ks' },
            { name: 'Špagety', amount: '300 g' }
        ]
    },
    {
        id: 68,
        name: 'Kotlety se sýrem a smetanou',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '35 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Vepřové kotlety', amount: '4 ks' },
            { name: 'Sýr', amount: '150 g' },
            { name: 'Smetana', amount: '200 ml' },
            { name: 'Česnek', amount: '2 stroužky' },
            { name: 'Brambory', amount: '500 g' }
        ]
    },
    {
        id: 69,
        name: 'Nudle se sojovou omáčkou',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '20 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Nudle', amount: '250 g' },
            { name: 'Sojová omáčka', amount: '3 lžíce' },
            { name: 'Zelenina', amount: '200 g' },
            { name: 'Česnek', amount: '2 stroužky' },
            { name: 'Sezamový olej', amount: '1 lžíce' }
        ]
    },
    {
        id: 70,
        name: 'Maso se sojovo-medovou omáčkou',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '30 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Vepřové/kuřecí maso', amount: '400 g' },
            { name: 'Sojová omáčka', amount: '3 lžíce' },
            { name: 'Med', amount: '2 lžíce' },
            { name: 'Česnek', amount: '2 stroužky' },
            { name: 'Rýže', amount: '200 g' }
        ]
    },
    {
        id: 71,
        name: 'Kuskus s lososem',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a7270028d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '25 min',
        difficulty: 'Snadné',
        kidFriendly: false,
        ingredients: [
            { name: 'Losos', amount: '300 g' },
            { name: 'Kuskus', amount: '200 g' },
            { name: 'Zelenina', amount: '200 g' },
            { name: 'Olivový olej', amount: '2 lžíce' },
            { name: 'Citron', amount: '1 ks' }
        ]
    },
    {
        id: 72,
        name: 'Butter chicken + naan (Kitchenette)',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '50 min',
        difficulty: 'Střední',
        kidFriendly: false,
        ingredients: [
            { name: 'Kuřecí maso', amount: '500 g' },
            { name: 'Rajčatový protlak', amount: '200 g' },
            { name: 'Smetana', amount: '200 ml' },
            { name: 'Máslo', amount: '50 g' },
            { name: 'Naan chléb', amount: '4 ks' },
            { name: 'Garam masala', amount: '2 lžičky' }
        ]
    },
    {
        id: 73,
        name: 'Ryba v těstíčku (Kitchenette)',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a7270028d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '35 min',
        difficulty: 'Střední',
        kidFriendly: true,
        ingredients: [
            { name: 'Rybí filé', amount: '400 g' },
            { name: 'Mouka', amount: '150 g' },
            { name: 'Vejce', amount: '2 ks' },
            { name: 'Pivo', amount: '100 ml' },
            { name: 'Brambory', amount: '500 g' }
        ]
    },

    // Polévky
    {
        id: 74,
        name: 'Čočková polévka (Dita P)',
        category: 'Lunch',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '45 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Čočka', amount: '200 g' },
            { name: 'Kořenová zelenina', amount: '300 g' },
            { name: 'Cibule', amount: '1 ks' },
            { name: 'Česnek', amount: '2 stroužky' },
            { name: 'Vývar', amount: '1.5 l' }
        ]
    },
    {
        id: 75,
        name: 'Hrachová polévka (Dita P)',
        category: 'Lunch',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '60 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Hrách', amount: '300 g' },
            { name: 'Kořenová zelenina', amount: '300 g' },
            { name: 'Uzené maso', amount: '200 g' },
            { name: 'Cibule', amount: '1 ks' },
            { name: 'Kmín', amount: '1 lžička' }
        ]
    },
    {
        id: 76,
        name: 'Bramboračka',
        category: 'Lunch',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '40 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Brambory', amount: '600 g' },
            { name: 'Houby', amount: '200 g' },
            { name: 'Cibule', amount: '1 ks' },
            { name: 'Kmín', amount: '1 lžička' },
            { name: 'Vývar', amount: '1 l' }
        ]
    },
    {
        id: 77,
        name: 'Dýňovka',
        category: 'Lunch',
        image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '35 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Dýně', amount: '600 g' },
            { name: 'Cibule', amount: '1 ks' },
            { name: 'Smetana', amount: '100 ml' },
            { name: 'Zázvor', amount: '1 lžička' },
            { name: 'Vývar', amount: '800 ml' }
        ]
    },
    {
        id: 78,
        name: 'Fazolová polévka',
        category: 'Lunch',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '50 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Fazole', amount: '300 g' },
            { name: 'Kořenová zelenina', amount: '300 g' },
            { name: 'Cibule', amount: '1 ks' },
            { name: 'Česnek', amount: '2 stroužky' },
            { name: 'Vývar', amount: '1.5 l' }
        ]
    },

    // Snídaně a dezerty
    {
        id: 79,
        name: 'Buchtičky se šodó',
        category: 'Breakfast',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '90 min',
        difficulty: 'Střední',
        kidFriendly: true,
        ingredients: [
            { name: 'Mouka', amount: '500 g' },
            { name: 'Droždí', amount: '20 g' },
            { name: 'Mléko', amount: '250 ml' },
            { name: 'Vejce', amount: '2 ks' },
            { name: 'Vanilkový krém', amount: '300 ml' }
        ]
    },
    {
        id: 80,
        name: 'Lívance s kefírem',
        category: 'Breakfast',
        image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '25 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Mouka', amount: '200 g' },
            { name: 'Kefír', amount: '250 ml' },
            { name: 'Vejce', amount: '2 ks' },
            { name: 'Cukr', amount: '2 lžíce' },
            { name: 'Marmeláda', amount: 'dle chuti' }
        ]
    },
    {
        id: 81,
        name: 'Kynute knedlíky',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '60 min',
        difficulty: 'Střední',
        kidFriendly: true,
        ingredients: [
            { name: 'Mouka', amount: '500 g' },
            { name: 'Droždí', amount: '20 g' },
            { name: 'Mléko', amount: '250 ml' },
            { name: 'Vejce', amount: '1 ks' },
            { name: 'Sůl', amount: '1 lžička' }
        ]
    },
    {
        id: 82,
        name: 'Trhánec',
        category: 'Dinner',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '20 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Mouka', amount: '300 g' },
            { name: 'Vejce', amount: '2 ks' },
            { name: 'Mléko', amount: '100 ml' },
            { name: 'Sůl', amount: '1 lžička' },
            { name: 'Máslo', amount: '30 g' }
        ]
    },
    {
        id: 83,
        name: 'Pudink',
        category: 'Snack',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '15 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Mléko', amount: '500 ml' },
            { name: 'Pudinkový prášek', amount: '1 balení' },
            { name: 'Cukr', amount: '3 lžíce' },
            { name: 'Vanilka', amount: '1 lžička' }
        ]
    },
    {
        id: 84,
        name: 'Krupicová kaše',
        category: 'Breakfast',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        time: '15 min',
        difficulty: 'Snadné',
        kidFriendly: true,
        ingredients: [
            { name: 'Mléko', amount: '500 ml' },
            { name: 'Krupice', amount: '80 g' },
            { name: 'Cukr', amount: '2 lžíce' },
            { name: 'Máslo', amount: '20 g' },
            { name: 'Kakao/džem', amount: 'dle chuti' }
        ]
    }
];
