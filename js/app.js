/*
    MappaturaSlotCodici
    Copyright (C) 2016 - Vittorio Cuculo <vittorio@dotdotdot.it>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

window.scrollTo(0,1);

L.Icon.Default.imagePath = 'dist/js/images/';

var map = L.map('map').setView([45.8, 9.1], 9);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>',
tileSize: 512,
maxZoom: 18,
zoomOffset: -1,
id: 'mapbox/light-v10',
accessToken: 'pk.eyJ1IjoiZG90ZG90ZG90IiwiYSI6ImNpbDExZXA2OTAwYTB3dW01aWhpM3NoaWgifQ.yLlK58v-ug5wVH1dcRwssw'
}).addTo(map);


L.control.scale({position: 'bottomright'}).addTo(map);

var isCollapsed = (document.body.clientWidth < 768);

String.prototype.capitalizeFirstLetter = function() {
    //return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

var scuoleLayer = L.geoJson(exp_MappaanagrafescuolelombardeMISOVACO, {
    onEachFeature: function(feature, layer) {
        var popupContent = '<b>' + feature.properties.DENOM_SEDE.capitalizeFirstLetter() + '</b><br>';

        if(feature.properties.INDIRIZZO_SEDE != "")
            popupContent += feature.properties.INDIRIZZO_SEDE.capitalizeFirstLetter();
        if(feature.properties.CIVICO_SEDE != "") 
            popupContent += ', ' + feature.properties.CIVICO_SEDE.capitalizeFirstLetter();
        if(feature.properties.COMUNE_SEDE != "") 
			popupContent += ',' + feature.properties.COMUNE_SEDE.capitalizeFirstLetter();

        layer.bindPopup(popupContent);
        layer.on('mouseover', function() {
            layer.setStyle({
                weight: 2
            });
        });
        layer.on('mouseout', function() {
            layer.setStyle({
                weight: 0
            });
        });
    },

    pointToLayer: function(feature, latlng) {
        var circle = L.circleMarker(latlng, {
            radius: (isCollapsed) ? 10 : 7,
            weight: 0,
            opacity: 1,
            fillOpacity: 0.8
        });
        circle.setStyle({'className': 'markerScuole'});
        return circle;
    }
});

var sportLayer = L.geoJson(exp_Mappacentrisportivi, {
    onEachFeature: function(feature, layer) {
        var popupContent = '<b>' + feature.properties.DENOMINAZIONE_CENTRO.capitalizeFirstLetter() + '</b><br>';

        if(feature.properties.INDIRIZZO != "")
			popupContent += feature.properties.INDIRIZZO.capitalizeFirstLetter();
        if(feature.properties.COMUNE != "")
            popupContent += ', ' + feature.properties.COMUNE.capitalizeFirstLetter();

        layer.bindPopup(popupContent);
        layer.on('mouseover', function() {
            layer.setStyle({
                weight: 2
            });
        });
        layer.on('mouseout', function() {
            layer.setStyle({
                weight: 0
            });
        });
    },

    pointToLayer: function(feature, latlng) {
        var circle = L.circleMarker(latlng, {
            radius: (isCollapsed) ? 10 : 7,
            weight: 0,
            opacity: 1,
            fillOpacity: 0.8
        });
        circle.setStyle({'className': 'markerSport'});
        return circle;
    }
});

var giovaniLayer = L.geoJson(exp_giovani, {
    onEachFeature: function(feature, layer) {
        var popupContent = '<b>' + feature.properties.markername.capitalizeFirstLetter() + '</b><br>' +
                   feature.properties.address.capitalizeFirstLetter();
        layer.bindPopup(popupContent);
        layer.on('mouseover', function() {
            layer.setStyle({
                weight: 2
            });
        });
        layer.on('mouseout', function() {
            layer.setStyle({
                weight: 0
            });
        });
    },

    pointToLayer: function(feature, latlng) {
        var circle = L.circleMarker(latlng, {
            radius: (isCollapsed) ? 10 : 7,
            weight: 0,
            opacity: 1,
            fillOpacity: 0.8
        });
        circle.setStyle({'className': 'markerGiovani'});
        return circle;
    }
});

var rsaLayer = L.geoJson(exp_rsa, {
    onEachFeature: function(feature, layer) {
        var popupContent = '<b>' + feature.properties.markername.capitalizeFirstLetter() + '</b><br>' +
                   feature.properties.address.capitalizeFirstLetter();
        layer.bindPopup(popupContent);
        layer.on('mouseover', function() {
            layer.setStyle({
                weight: 2
            });
        });
        layer.on('mouseout', function() {
            layer.setStyle({
                weight: 0
            });
        });
    },

    pointToLayer: function(feature, latlng) {
        var circle = L.circleMarker(latlng, {
            radius: (isCollapsed) ? 10 : 7,
            weight: 0,
            opacity: 1,
            fillOpacity: 0.8
        });
        circle.setStyle({'className': 'markerRsa'});
        return circle;
    }
});

var auserLayer = L.geoJson(exp_auser, {
	onEachFeature: function(feature, layer) {
        var popupContent = '<b>' + feature.properties.markername.capitalizeFirstLetter() + '</b><br>' +
                   feature.properties.address.capitalizeFirstLetter();
        layer.bindPopup(popupContent);
        layer.on('mouseover', function() {
            layer.setStyle({
                weight: 2
            });
        });
        layer.on('mouseout', function() {
            layer.setStyle({
                weight: 0
            });
        });
    },

    pointToLayer: function(feature, latlng) {
        var circle = L.circleMarker(latlng, {
            radius: (isCollapsed) ? 10 : 7,
            weight: 0,
            opacity: 1,
            fillOpacity: 0.8
        });
        circle.setStyle({'className': 'markerAuser'});
        return circle;
    }
});

var socialiLayer = L.geoJson(exp_sociali, {
    onEachFeature: function(feature, layer) {
        var popupContent = '<b>' + feature.properties.markername.capitalizeFirstLetter() + '</b><br>' +
                   feature.properties.address.capitalizeFirstLetter() + '<br><a href="' + feature.properties.sito +
                   '" target="_blank">' + feature.properties.sito + '</a>' +
                   '<br><a href="mailto:' +  feature.properties.mail + '">' +
                   feature.properties.mail + '</a><br>' + feature.properties.telefono;
        layer.bindPopup(popupContent);
        layer.on('mouseover', function() {
            layer.setStyle({
                weight: 2
            });
        });
        layer.on('mouseout', function() {
            layer.setStyle({
                weight: 0
            });
        });
    },

    pointToLayer: function(feature, latlng) {
        var circle = L.circleMarker(latlng, {
            radius: (isCollapsed) ? 10 : 7,
            weight: 0,
            opacity: 1,
            fillOpacity: 0.8
        });
        circle.setStyle({'className': 'markerSociali'});
        return circle;
    }
});

var terzoLayer = L.geoJson(exp_terzo, {
    onEachFeature: function(feature, layer) {
        var popupContent = '<b>' + feature.properties.markername.capitalizeFirstLetter() + '</b><br>' +
                   feature.properties.address.capitalizeFirstLetter() + '<br><a href="' + feature.properties.sito +
                   '" target="_blank">' + feature.properties.sito + '</a>' +
                   '<br><a href="mailto:' +  feature.properties.mail + '">' +
                   feature.properties.mail + '</a><br>' + feature.properties.telefono;
        layer.bindPopup(popupContent);
        layer.on('mouseover', function() {
            layer.setStyle({
                weight: 2
            });
        });
        layer.on('mouseout', function() {
            layer.setStyle({
                weight: 0
            });
        });
    },

    pointToLayer: function(feature, latlng) {
        var circle = L.circleMarker(latlng, {
            radius: (isCollapsed) ? 10 : 7,
            weight: 0,
            opacity: 1,
            fillOpacity: 0.8
        });
        circle.setStyle({'className': 'markerTerzo'});
        return circle;
    }
});

var diurniLayer = L.geoJson(exp_diurni, {
    onEachFeature: function(feature, layer) {
        var popupContent = '<b>' + feature.properties.markername.capitalizeFirstLetter() + '</b><br>' +
                   feature.properties.address.capitalizeFirstLetter();
        layer.bindPopup(popupContent);
        layer.on('mouseover', function() {
            layer.setStyle({
                weight: 2
            });
        });
        layer.on('mouseout', function() {
            layer.setStyle({
                weight: 0
            });
        });
    },

    pointToLayer: function(feature, latlng) {
        var circle = L.circleMarker(latlng, {
            radius: (isCollapsed) ? 10 : 7,
            weight: 0,
            opacity: 1,
            fillOpacity: 0.8
        });
        circle.setStyle({'className': 'markerDiurni'});
        return circle;
    }
});

var slotsLayer = L.geoJson(exp_centrislotsimplified, {
    onEachFeature: function(feature, layer) {
        if (!feature.properties.hasOwnProperty('vlt')){
            var popupContent = '<b>' + feature.properties.markername.capitalizeFirstLetter() + '</b><br>' +
        			   feature.properties.address.capitalizeFirstLetter();
            layer.bindPopup(popupContent);
            layer.on('mouseover', function() {
                layer.setStyle({
                    weight: 2
                });
            });
            layer.on('mouseout', function() {
                layer.setStyle({
                    weight: 0
                });
            });
        }
    },

    pointToLayer: function(feature, latlng) {
        var circle = L.circleMarker(latlng, {
            radius: (isCollapsed) ? 10 : 7,
            weight: 0,
            opacity: 1,
            fillOpacity: 0.8
        });
        circle.setStyle({'className': 'markerSlots'});
        return circle;
    },

    filter: function(feature, layer) {
        return !feature.properties.hasOwnProperty('vlt');
    }
});

var slotsVLTLayer = L.geoJson(exp_centrislotsimplified, {
    onEachFeature: function(feature, layer) {
        var popupContent = '<b>' + feature.properties.markername.capitalizeFirstLetter() + '</b><br>' +
                   feature.properties.address.capitalizeFirstLetter();
        layer.bindPopup(popupContent);
        layer.on('mouseover', function() {
            layer.setStyle({
                weight: 2
            });
        });
        layer.on('mouseout', function() {
            layer.setStyle({
                weight: 0
            });
        });
    },

    pointToLayer: function(feature, latlng) {
        var circle = L.circleMarker(latlng, {
            radius: (isCollapsed) ? 10 : 7,
            weight: 0,
            opacity: 1,
            fillOpacity: 0.8
        });
        circle.setStyle({'className': 'markerSlots'});
        return circle;
    },

    filter: function(feature, layer) {
        return feature.properties.hasOwnProperty('vlt');
    }
});

var noslotsLayer = L.geoJson(exp_centrislotfree, {
    onEachFeature: function(feature, layer) {
        var popupContent = '<b>' + feature.properties.markername.capitalizeFirstLetter() + '</b><br>' +
                   feature.properties.address.capitalizeFirstLetter();
        layer.bindPopup(popupContent);
        layer.on('mouseover', function() {
            layer.setStyle({
                weight: 2
            });
        });
        layer.on('mouseout', function() {
            layer.setStyle({
                weight: 0
            });
        });
    },

    pointToLayer: function(feature, latlng) {
        var circle = L.circleMarker(latlng, {
            radius: (isCollapsed) ? 10 : 7,
            weight: 0,
            opacity: 1,
            fillOpacity: 0.8
        });
        circle.setStyle({'className': 'markerNoSlots'});
        return circle;
    }
});

var ssoLayer = L.geoJson(exp_Strutturesanitarie, {
    onEachFeature: function(feature, layer) {
        var popupContent = '<b>' + feature.properties.RICOVERO0.capitalizeFirstLetter() + '</b><br>';

        if(feature.properties.INDIRIZZO != "")
			popupContent += feature.properties.INDIRIZZO.capitalizeFirstLetter();
        if(feature.properties.LOCALITA != "")
            popupContent += ', ' + feature.properties.LOCALITA.capitalizeFirstLetter();

        layer.bindPopup(popupContent);
        layer.on('mouseover', function() {
            layer.setStyle({
                weight: 2
            });
        });
        layer.on('mouseout', function() {
            layer.setStyle({
                weight: 0
            });
        });
    },

    pointToLayer: function(feature, latlng) {
        var circle = L.circleMarker(latlng, {
            radius: (isCollapsed) ? 10 : 7,
            weight: 0,
            opacity: 1,
            fillOpacity: 0.8
        });
        circle.setStyle({'className': 'markerSso'});
        return circle;
    }
});

var sertLayer = L.geoJson(exp_sert, {
    onEachFeature: function(feature, layer) {
        var popupContent = '<b>' + feature.properties.markername.capitalizeFirstLetter() + '</b><br>' +
                   feature.properties.address.capitalizeFirstLetter();
        
        if(feature.properties.telefono)
            popupContent += '<br>' + feature.properties.telefono;

        layer.bindPopup(popupContent);
        layer.on('mouseover', function() {
            layer.setStyle({
                weight: 2
            });
        });
        layer.on('mouseout', function() {
            layer.setStyle({
                weight: 0
            });
        });
    },

    pointToLayer: function(feature, latlng) {
        var circle = L.circleMarker(latlng, {
            radius: (isCollapsed) ? 10 : 7,
            weight: 0,
            opacity: 1,
            fillOpacity: 0.8
        });
        circle.setStyle({'className': 'markerSert'});
        return circle;
    }
});

var cultoLayer = L.geoJson(exp_culto, {
    onEachFeature: function(feature, layer) {
        var popupContent = '<b>' + feature.properties.denominazi.capitalizeFirstLetter() + '</b><br>';

        if(feature.properties.pvci != "")
            popupContent += feature.properties.pvci.capitalizeFirstLetter();
        if(feature.properties.pvcc != "")
            popupContent += ', ' + feature.properties.pvcc.capitalizeFirstLetter();

        layer.bindPopup(popupContent);
        layer.on('mouseover', function() {
            layer.setStyle({
                weight: 2
            });
        });
        layer.on('mouseout', function() {
            layer.setStyle({
                weight: 0
            });
        });
    },

    pointToLayer: function(feature, latlng) {
        var circle = L.circleMarker(latlng, {
            radius: (isCollapsed) ? 10 : 7,
            weight: 0,
            opacity: 1,
            fillOpacity: 0.8
        });
        circle.setStyle({'className': 'markerCulto'});
        return circle;
    }
});

var densityLayer = L.geoJson(exp_Com2011WGS84, {
    style: style,
    onEachFeature: function(feature, layer) {
        if (feature.properties.AbitantixS == 0)
            var popupContent = 'Comune di <b>' + feature.properties.NOME.capitalizeFirstLetter() + '</b><br>Nessun apparecchio installato.';
        else if (feature.properties.AbitantixS == -1)
            var popupContent = 'Comune di <b>' + feature.properties.NOME.capitalizeFirstLetter() + '</b><br>Dato non rilevato.';
        else
            var popupContent = 'Comune di <b>' + feature.properties.NOME.capitalizeFirstLetter() + '</b><br><b>' + feature.properties.AbitantixS + '</b> abitanti per apparecchio.';

        layer.bindPopup(popupContent);
        layer.on('mouseover', function() {
            layer.setStyle({
                fillColor: getDensityColor(feature.properties.AbitantixS),
                weight: 1,
                opacity: 1,
            });
        });
        layer.on('mouseout', function() {
            layer.setStyle({
                fillColor: getDensityColor(feature.properties.AbitantixS),
                weight: .3,
                opacity: 0.6,
            });
        });    
    }
});

var comuniLayer = L.geoJson(exp_Com2011WGS84, {
    style: styleComuni,
    onEachFeature: function(feature, layer) {
        var popupContent = 'Comune di <b>' + feature.properties.NOME.capitalizeFirstLetter() + '</b>';
        layer.bindPopup(popupContent);
        layer.on('mouseover', function() {
            layer.setStyle({
                weight: 3,
                opacity: 0.5,
                fillOpacity: 0.1
            });
        });
        layer.on('mouseout', function() {
            layer.setStyle({
                weight: 1,
                opacity: 1,
                fillOpacity: 0.1
            });
        });
    }
}).addTo(map);

var overlays = L.layerGroup().addTo(map);

var clusterSport = new L.MarkerClusterGroup({
    disableClusteringAtZoom: 16,
    spiderfyDistanceMultiplier: 2,
    iconCreateFunction: function(cluster) {
        return L.divIcon({
            html: cluster.getChildCount(),
            className: 'mycluster clusterSport',
            iconSize: L.point(40, 40)
        });
    }
}); //.addTo(overlays);
var clusterScuole = new L.MarkerClusterGroup({
    disableClusteringAtZoom: 16,
    spiderfyDistanceMultiplier: 2,
    iconCreateFunction: function(cluster) {
        return L.divIcon({
            html: cluster.getChildCount(),
            className: 'mycluster clusterScuole',
            iconSize: L.point(40, 40)
        });
    }
}); //.addTo(overlays);

var clusterAuser = new L.MarkerClusterGroup({
    disableClusteringAtZoom: 16,
    spiderfyDistanceMultiplier: 2,
    iconCreateFunction: function(cluster) {
        return L.divIcon({
            html: cluster.getChildCount(),
            className: 'mycluster clusterAuser',
            iconSize: L.point(40, 40)
        });
    }
});//.addTo(overlays);

var clusterTerzo = new L.MarkerClusterGroup({
    disableClusteringAtZoom: 16,
    spiderfyDistanceMultiplier: 2,
    iconCreateFunction: function(cluster) {
        return L.divIcon({
            html: cluster.getChildCount(),
            className: 'mycluster clusterTerzo',
            iconSize: L.point(40, 40)
        });
    }
});//.addTo(overlays);

var clusterSociali = new L.MarkerClusterGroup({
    disableClusteringAtZoom: 16,
    spiderfyDistanceMultiplier: 2,
    iconCreateFunction: function(cluster) {
        return L.divIcon({
            html: cluster.getChildCount(),
            className: 'mycluster clusterSociali',
            iconSize: L.point(40, 40)
        });
    }
});//.addTo(overlays);

var clusterGiovani = new L.MarkerClusterGroup({
    disableClusteringAtZoom: 16,
    spiderfyDistanceMultiplier: 2,
    iconCreateFunction: function(cluster) {
        return L.divIcon({
            html: cluster.getChildCount(),
            className: 'mycluster clusterGiovani',
            iconSize: L.point(40, 40)
        });
    }
});//.addTo(overlays);

var clusterRsa = new L.MarkerClusterGroup({
    disableClusteringAtZoom: 16,
    spiderfyDistanceMultiplier: 2,
    iconCreateFunction: function(cluster) {
        return L.divIcon({
            html: cluster.getChildCount(),
            className: 'mycluster clusterRsa',
            iconSize: L.point(40, 40)
        });
    }
});//.addTo(overlays);

var clusterDiurni = new L.MarkerClusterGroup({
    disableClusteringAtZoom: 16,
    spiderfyDistanceMultiplier: 2,
    iconCreateFunction: function(cluster) {
        return L.divIcon({
            html: cluster.getChildCount(),
            className: 'mycluster clusterDiurni',
            iconSize: L.point(40, 40)
        });
    }
});//.addTo(overlays);

var clusterSlots = new L.MarkerClusterGroup({
    disableClusteringAtZoom: 14,
    spiderfyDistanceMultiplier: 2,
    iconCreateFunction: function(cluster) {
        return L.divIcon({
            html: cluster.getChildCount(),
            className: 'mycluster clusterSlots',
            iconSize: L.point(40, 40)
        });
    }
}).addTo(overlays);

var clusterVltSlots = new L.MarkerClusterGroup({
    disableClusteringAtZoom: 14,
    spiderfyDistanceMultiplier: 2,
    iconCreateFunction: function(cluster) {
        return L.divIcon({
            html: cluster.getChildCount(),
            className: 'mycluster clusterSlots',
            iconSize: L.point(40, 40)
        });
    }
}).addTo(overlays);

var clusterNoSlots = new L.MarkerClusterGroup({
    disableClusteringAtZoom: 14,
    spiderfyDistanceMultiplier: 2,
    iconCreateFunction: function(cluster) {
        return L.divIcon({
            html: cluster.getChildCount(),
            className: 'mycluster clusterNoSlots',
            iconSize: L.point(40, 40)
        });
    }
}).addTo(overlays);

var clusterSso = new L.MarkerClusterGroup({
    disableClusteringAtZoom: 16,
    spiderfyDistanceMultiplier: 2,
    iconCreateFunction: function(cluster) {
        return L.divIcon({
            html: cluster.getChildCount(),
            className: 'mycluster clusterSso',
            iconSize: L.point(40, 40)
        });
    }
}); //.addTo(overlays);

var clusterSert = new L.MarkerClusterGroup({
    disableClusteringAtZoom: 16,
    spiderfyDistanceMultiplier: 2,
    iconCreateFunction: function(cluster) {
        return L.divIcon({
            html: cluster.getChildCount(),
            className: 'mycluster clusterSert',
            iconSize: L.point(40, 40)
        });
    }
}); //.addTo(overlays);

var clusterCulto = new L.MarkerClusterGroup({
    disableClusteringAtZoom: 16,
    spiderfyDistanceMultiplier: 2,
    iconCreateFunction: function(cluster) {
        return L.divIcon({
            html: cluster.getChildCount(),
            className: 'mycluster clusterCulto',
            iconSize: L.point(40, 40)
        });
    }
}); //.addTo(overlays);

clusterSport.addLayer(sportLayer);
clusterScuole.addLayer(scuoleLayer);
clusterAuser.addLayer(auserLayer);
clusterGiovani.addLayer(giovaniLayer);
clusterRsa.addLayer(rsaLayer);
clusterDiurni.addLayer(diurniLayer);
clusterSso.addLayer(ssoLayer);
clusterCulto.addLayer(cultoLayer);

clusterTerzo.addLayer(terzoLayer);
clusterSociali.addLayer(socialiLayer);
clusterSert.addLayer(sertLayer);

clusterSlots.addLayer(slotsLayer);
clusterVltSlots.addLayer(slotsVLTLayer);
clusterNoSlots.addLayer(noslotsLayer);

var slotsGroup = L.layerGroup([clusterSlots, clusterVltSlots, clusterNoSlots]);
var sensibleGroup = L.layerGroup([clusterSport, clusterScuole, clusterAuser, clusterGiovani, clusterRsa,clusterDiurni, clusterSso, clusterCulto]);
//sensibleGroup.addTo(map);

var unit = 'meters';

var s1 = turf.buffer(exp_MappaanagrafescuolelombardeMISOVACO, 250, unit);
var s2 = turf.buffer(exp_auser, 250, unit);
var s3 = turf.buffer(exp_giovani, 250, unit);
var s4 = turf.buffer(exp_Strutturesanitarie, 250, unit);
var s5 = turf.buffer(exp_Mappacentrisportivi, 250, unit);
var s6 = turf.buffer(exp_diurni, 250, unit);
var s7 = turf.buffer(exp_culto, 250, unit);
/* var ptsWithin = turf.within(exp_centrislotsimplified, searchWithin);
var conflictBuffer = turf.buffer(ptsWithin, 250, unit);
*/
var conflictLayer = L.geoJson( [s1, s2, s3, s4, s5, s6, s7] , {
    style: styleConflict
});

var groupedOverlays = {
    "Attributi": {
        "Densità di abitanti per ogni apparecchio installato <a href='#' data-toggle='modal' data-target='#helpDensity' title='Cosa sono?'><i class='fa fa-question-circle'></i></a>": densityLayer,
        "Aree sensibili <a href='#' data-toggle='modal' data-target='#helpAreeSens' title='Cosa sono?'><i class='fa fa-question-circle'></i></a>": conflictLayer
    },
    "Esercizi pubblici autorizzati <a href='#' data-toggle='modal' data-target='#helpEsercizi' title='Cosa sono?'><i class='fa fa-question-circle'></i></a>": {
        "<i class='fa fa-circle markerSlots'></i> Con apparecchi solo newslot (A)": clusterSlots,
        "<i class='fa fa-circle markerSlots'></i> Con apparecchi newslot/VLT (A/B)": clusterVltSlots,
        "<i class='fa fa-circle markerNoSlots'></i> Senza apparecchi installati": clusterNoSlots,
    },
    "Luoghi sensibili <a href='#' data-toggle='modal' data-target='#helpSensibili' title='Cosa sono?'><i class='fa fa-question-circle'></i></a>": {
        "<i class='fa fa-circle markerSport'></i> Impianti sportivi": clusterSport,
        "<i class='fa fa-circle markerScuole'></i> Istituti scolastici inf. e sup.": clusterScuole,
        "<i class='fa fa-circle markerSso'></i> Strutture sanitarie ospedaliere": clusterSso,
        "<i class='fa fa-circle markerCulto'></i> Luoghi di culto ": clusterCulto,
        "<i class='fa fa-circle markerDiurni'></i> Centri diurni per anziani": clusterDiurni,
        "<i class='fa fa-circle markerAuser'></i> Centri anziani (AUSER)": clusterAuser, 
        "<i class='fa fa-circle markerGiovani'></i> Centri di aggregazione giovanile": clusterGiovani, 
        "<i class='fa fa-circle markerRsa'></i> Residenze sanitarie assistenziali": clusterRsa, 
    },
    "Presidi GAP <a href='#' data-toggle='modal' data-target='#helpPresidi' title='Cosa sono?'><i class='fa fa-question-circle'></i></a>": {
        //"Strutture residenziali accreditate per dipendenze" <i class='fa fa-circle diurni'></i>": clusterSSO, 
        "<i class='fa fa-circle markerSert'></i> Ser.T": clusterSert, 
        "<i class='fa fa-circle markerSociali'></i> Servizi sociali": clusterSociali, 
        "<i class='fa fa-circle markerTerzo'></i> Servizi del terzo settore e volontariato sociale": clusterTerzo, 
    },

};

L.control.groupedLayers({}, groupedOverlays, {
    collapsed: isCollapsed,
    //exclusiveGroups: ["Attributi"],
    groupCheckboxes: true,
}).addTo(map);


/* GOOGLE MAPS geocoding
var geocoder = new google.maps.Geocoder();
function googleGeocoding(text, callResponse)
{
    geocoder.geocode({address: text}, callResponse);
}

function formatJSON(rawjson)
{
    var json = {},
        key, loc, disp = [];
    for(var i in rawjson)
    {
        key = rawjson[i].formatted_address;
        
        loc = L.latLng( rawjson[i].geometry.location.lat(), rawjson[i].geometry.location.lng() );
        
        json[ key ]= loc;   //key,value format
    }
    return json;
} */


map.addControl(new L.Control.Search({
    url: 'https://nominatim.openstreetmap.org/search?format=json&q={s}',
    jsonpParam: 'json_callback',
    propertyName: 'display_name',
    propertyLoc: ['lat', 'lon'],
    /* GOOGLE MAPS geocoding
    sourceData: googleGeocoding,
    formatData: formatJSON, */
    circleLocation: true,
    markerLocation: false,
    autoCollapse: true,
    initial: false,
    minLength: 3,
    collapsed: isCollapsed,
    textPlaceholder: 'Cerca indirizzo...',
    textErr: 'Indirizzo non trovato.',
    zoom: 17
}));

map.addControl( new L.Control.Search({
    layer: slotsGroup,
    propertyName: 'markername',
    circleLocation: true,
    markerLocation: false,
    initial: false,
    minLength: 3,
    collapsed: isCollapsed,
    position: 'topright',
    textPlaceholder: 'Cerca esercizio...',
    textErr: 'Esercizio non trovato.',
    zoom: 17
}));

function style(feature) {
    return {
        color: '#000',
        weight: '.3',
        fillColor: getDensityColor(feature.properties.AbitantixS),
        opacity: '1.0',
        fillOpacity: '.6',
    };
}

function styleComuni(feature) {
    return {
        color: '#8232D6',
        weight: '1',
        opacity: '1',
        fillColor: '#8232D6',
        fillOpacity: '0.1',
    };
}

function styleConflict(feature) {
    return {
        weight: '0.5',
        fillColor: 'blue',
        opacity: '1.0',
        fillOpacity: '0.1',
    };
}

function getDensityColor(d) {

    return d > 1024 ? '#32de5e' :
        d > 512 ? '#48cf87' :
        d > 256 ? '#5dc1af' :
        d > 128 ? '#72b2d7' :
        d > 64 ? '#ffabab' :
        d > 32 ? '#ff5656' :
        d > 16 ? '#ff0000' :
        d == 0 ? '#00ff00' :
        d == -1 ? '#bababa':
        '#bababa'
}

var legend = L.control({
    position: 'topleft'
});

legend.onAdd = function(map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [-1, 16, 32, 64, 128, 256, 512, 1024, 0];
    
    div.innerHTML += "<b>N° abitanti per apparecchio</b><br>"
    
    for (var i = 0; i < grades.length; i++) {
        if (grades[i] == -1 ) {
            div.innerHTML +=
            '<i style="background:' + getDensityColor(grades[i]) + '"></i>Dato non rilevato<br>';
        } else if (grades[i] == 0 ) {
            div.innerHTML +=
            '<i style="background:' + getDensityColor(grades[i]) + '"></i>Nessun apparecchio<br>';
        } else {
            div.innerHTML +=
            '<i style="background:' + getDensityColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] != 0 ? '&ndash;' + grades[i + 1] + '<br>' : '+<br>');
        }
    }

    return div;
};

map.on('overlayadd', function(eventLayer) {

    if (eventLayer.name.startsWith('Densità di abitanti')) {
        legend.addTo(this);
        map.removeLayer(comuniLayer);
    } else if (eventLayer.name.startsWith('Aree sensibili')) {
        map.setZoom(13, {animate: true});
    }
});

map.on('overlayremove', function(eventLayer) {

    if (eventLayer.name.startsWith('Densità di abitanti')) {
        legend.removeFrom(this);
        map.addLayer(comuniLayer);
    }
});
