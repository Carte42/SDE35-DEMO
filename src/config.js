// ── Passer à true pour activer les fonctions d'édition (annotations, géométrie, export)
export const EDIT_MODE = false

export const IGN_WMS_URL = 'https://data.geopf.fr/wms-r/wms'
export const IGN_LAYER_T1 = 'ORTHOIMAGERY.ORTHOPHOTOS2020'                 // BD ORTHO 2020 (RGB)
export const IGN_LAYER_T2 = 'ORTHOIMAGERY.ORTHOPHOTOS.ORTHO-EXPRESS.2023'  // Ortho-express 2023 (RGB)
// Millésime 2026 : prise de vue IGN de mai-juin 2026, servie en Ortho-express
// depuis l'été 2026 et couvrant l'ensemble du département. Attention au
// changement de nommage IGN : ORTHO-EXPRESS.<année> jusqu'en 2025,
// RVB-EXPRESS.<année> à partir de 2026 (ORTHO-EXPRESS.2026 renvoie une erreur).
// La BD ORTHO définitive du millésime 2026 n'est pas encore parue.
export const IGN_LAYER_T3 = 'ORTHOIMAGERY.ORTHOPHOTOS.RVB-EXPRESS.2026'    // Ortho-express 2026 (RGB)
export const MAP_CENTER = [48.18, -1.63]   // Ille-et-Vilaine (hors Rennes Métropole)
export const MAP_ZOOM = 9

// ── Hébergement externe des rapports PDF (1,5 Go, hors GitHub Pages) ─────────
// Les chemins du manifeste (data/rapports_manifest.json) sont relatifs :
//   "<epci_slug>/Rapport_PCRS_<Commune>.pdf"
// RAPPORTS_BASE_URL est préfixé devant. Uploader l'arborescence
// "4. Livraison/rapports/" telle quelle sur cet hébergement (Drive public, S3,
// serveur statique…) puis renseigner l'URL ci-dessous (sans / final).
// Tant qu'elle est vide, le bouton de téléchargement reste désactivé.
export const RAPPORTS_BASE_URL = 'https://rapports.carte42.fr'

// ── Archive ZIP de TOUS les rapports (générée sur l'hébergement, ~1,3 Go) ───
// Servie à `${RAPPORTS_BASE_URL}/${RAPPORTS_ZIP_FILE}`. Active le bouton
// « Tout télécharger » du RapportModal. Régénération côté serveur :
//   ssh root@<hôte> 'cd /var/www/rapports && zip -1 -r -q /tmp/r.zip . -x "*.zip" \
//     && mv -f /tmp/r.zip ./Rapports_PCRS_SDE35_complet.zip && chmod 644 ./Rapports_PCRS_SDE35_complet.zip'
// Vide = bouton masqué.
export const RAPPORTS_ZIP_FILE = 'Rapports_PCRS_SDE35_complet.zip'
