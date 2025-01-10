exports.get = (req, res) => {
    const catalogue = [
        {
			shape: "Écho",
			categorie: "Dildo",
			name: "Occulte",
			description: "Mou et confortable. Les textures sont adoucies, offrant une pénétration souple qui épouse les shapes du corps.",
			price: 95,
			image: "https://fera-daemon.com/cdn/shop/files/Fera_daemon_halloween_dildo_crystal_gode_toys_4_1400x.jpg?v=1729361881"
		},
	
		{
			shape: "Écho",
			categorie: "Dildo",
			name: "Opale d'Hiver",
			description: "Mou et confortable. Les textures sont adoucies, offrant une pénétration souple qui épouse les shapes du corps.",
			price: 95,
			image: "https://fera-daemon.com/cdn/shop/files/FeraDaemon2HD-41_1400x.png?v=1709397279"
		},
	
		{
			shape: "Fênra",
			categorie: "Dildo",
			name: "Terres Calcinées",
			description: "Un classique efficace et polyvalent ! Ne contient pas de phtalate ni d'autre substance chimique nocive pour le corps.",
			price: 95,
			image: "https://fera-daemon.com/cdn/shop/products/fera_daemon_10_1400x.jpg?v=1667139330"
		},
	
		{
			shape: "Fênra",
			categorie: "Dildo",
			name: "Serment d'Albâtre",
			description: "Un classique efficace et polyvalent ! Ne contient pas de phtalate ni d'autre substance chimique nocive pour le corps.",
			price: 95,
			image: "https://fera-daemon.com/cdn/shop/files/IMG_9071_1400x.jpg?v=1728238189"
		},
	
		{
			shape: "Fênra",
			categorie: "Dildo",
			name: "Lunenoire",
			description: "Un classique efficace et polyvalent ! Ne contient pas de phtalate ni d'autre substance chimique nocive pour le corps.",
			price: 75,
			image: "https://fera-daemon.com/cdn/shop/files/IMG_8958_7ae77cdd-4a32-4150-a6b9-b6ba2bd0349e_1400x.jpg?v=1728292331"
		},
		
		{
			shape: "Néa",
			categorie: "Dildo",
			name: "Feuille d'Ilvine",
			description: "99% de silicone biocompatible réticulé au platine. C'est une matière non-poreuse et atoxique destinée au contact direct avec le corps humain. Tous les silicones que nous utilisons ont par ailleurs été certifiés ISO 10993-10 (Evaluation biologique des dispositifs médicaux). Ce sont des matériaux fabriqués aux USA qui ne posent pas de problème de traçabilité.",
			price: 75,
			image: "https://fera-daemon.com/cdn/shop/files/fera_daemon_dildo_fantasy_fairy_forest_2_1d0f6329-1501-4c9c-a775-1d43bca9ccd7_1400x.jpg?v=1719173785"
		},
	
		{
			shape: "Néa",
			categorie: "Dildo",
			name: "Fantasmagorique",
			description: "99% de silicone biocompatible réticulé au platine. C'est une matière non-poreuse et atoxique destinée au contact direct avec le corps humain. Tous les silicones que nous utilisons ont par ailleurs été certifiés ISO 10993-10 (Evaluation biologique des dispositifs médicaux). Ce sont des matériaux fabriqués aux USA qui ne posent pas de problème de traçabilité.",
			price: 95,
			image: "https://fera-daemon.com/cdn/shop/products/IMG_3473_1400x.jpg?v=1656585978"
		},
	
		{
			shape: "Néa",
			categorie: "Dildo",
			name: "Daemellys",
			description: "99% de silicone biocompatible réticulé au platine. C'est une matière non-poreuse et atoxique destinée au contact direct avec le corps humain. Tous les silicones que nous utilisons ont par ailleurs été certifiés ISO 10993-10 (Evaluation biologique des dispositifs médicaux). Ce sont des matériaux fabriqués aux USA qui ne posent pas de problème de traçabilité.",
			price: 95,
			image: "https://fera-daemon.com/cdn/shop/files/FeraDaemon2HD-28_dab8106a-66b8-491a-8097-0c8ed9bd7126_1400x.jpg?v=1710081998"
		},
	
		{
			shape: "Nymf",
			categorie: "Dildo",
			name: "Palais Hanté",
			description: "Les marbrures de votre engin ne correspondront jamais exactement aux photos. Chaque modèle a un mélange unique en raison du processus artisanal de fabrication !",
			price: 95,
			image: "https://fera-daemon.com/cdn/shop/files/IMG_2959_c024e567-7c2d-4dec-8ed3-f94e922e56c5_1400x.jpg?v=1729362470"
		},
	
		{
			shape: "Nymf",
			categorie: "Plug",
			name: "Terres Calcinées",
			description: "La pointe au sommet du bulbe de Nymf Plug est suffisamment molle pour ne pas faire mal ! Le silicone permet des plugs plus texturés que le métal ou le verre par exemple, qui, s'ils ne sont pas très lisses et arrondis, peuvent devenir douloureux.",
			price: 80,
			image: "https://fera-daemon.com/cdn/shop/files/plugferadaemonhalloween_4_1400x.jpg?v=1697457706"
		},
	
		{
			shape: "Nymf",
			categorie: "Plug",
			name: "Mécanisme Ancien",
			description: "La pointe au sommet du bulbe de Nymf Plug est suffisamment molle pour ne pas faire mal ! Le silicone permet des plugs plus texturés que le métal ou le verre par exemple, qui, s'ils ne sont pas très lisses et arrondis, peuvent devenir douloureux.",
			price: 65,
			image: "https://fera-daemon.com/cdn/shop/files/IMG_1971_1400x.jpg?v=1727712082"
		}
    ];

    res.setHeader('Content-Type', 'application/json');
    res.send(catalogue);
};