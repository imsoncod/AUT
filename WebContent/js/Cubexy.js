window.onload = function(){
	$('#loading').hide();
}

var colorArray = [
	"BASE.png",
	"BLACK.png",
	"BLUE.png",
	"BROWN.png",
	"CYAN.png",
	"DARKGREEN.png",
	"GREEN.png",
	"ORANGE.png",
	"PINK.png",
	"PURPLE.png",
	"RED.png",
	"WHITE.png",
	"YELLOW.png"
	];

var bodyArray = [
	"ALICE.png",
	"ASTRO.png",
	"BALLERINA.png",
	"BALLERINAazul.png",
	"BALLERINAmorada.png",
	"BLACKSUIT.png",
	"CAPTAIN.png",
	"DOCTOR.png",
	"EXPLORER.png",
	"HADES.png",
	"HEARTS.png",
	"HERCULES.png",
	"JACKET.png",
	"LATEX.png",
	"MADHATTER.png",
	"MECHANIC.png",
	"MEGARA.png",
	"MILITARY.png",
	"MINER.png",
	"MORTY.png",
	"POLICE.png",
	"REDQUEEN.png",
	"RICK.png",
	"SECURITY.png",
	"WHITERABBIT.png",
	"WHITESUIT.png",
	"WINTER.png",
	"WORKER.png"
	];

var hatArray = [
	"ALICE.png",
	"ALIEN.png",
	"ANTHENA.png",
	"ASTRO.png",
	"BAG.png",
	"BALLOON1.png",
	"BALLOON10.png",
	"BALLOON11.png",
	"BALLOON12.png",
	"BALLOON2.png",
	"BALLOON3.png",
	"BALLOON4.png",
	"BALLOON5.png",
	"BALLOON6.png",
	"BALLOON7.png",
	"BALLOON8.png",
	"BALLOON9.png",
	"BANANA.png",
	"BANDANA.png",
	"BAT.png",
	"BEANIE.png",
	"BEAR.png",
	"BERET.png",
	"BIRTHDAY.png",
	"BLACK.png",
	"BROWS.png",
	"CANE.png",
	"CAP.png",
	"CAPTAIN.png",
	"CAT.png",
	"CHEESE.png",
	"CHEF.png",
	"CHERRY.png",
	"COP.png",
	"COWBOY.png",
	"CREWMATE.png",
	"CREWMATE10.png",
	"CREWMATE11.png",
	"CREWMATE12.png",
	"CREWMATE2.png",
	"CREWMATE3.png",
	"CREWMATE4.png",
	"CREWMATE5.png",
	"CREWMATE6.png",
	"CREWMATE7.png",
	"CREWMATE8.png",
	"CREWMATE9.png",
	"CROWN.png",
	"CUERVO.png",
	"DEVIL.png",
	"DOCTOR.png",
	"DOUBLE.png",
	"DRAIN.png",
	"EGG.png",
	"ELMER.png",
	"EYE.png",
	"FEZ.png",
	"FLAMINGO.png",
	"FLOWER.png",
	"FLOWERPOT.png",
	"FREEZE.png",
	"GASMASK.png",
	"GOGGLES.png",
	"GOGGLES2.png",
	"GREEN.png",
	"HADES.png",
	"HALO.png",
	"HAWK.png",
	"HEADBAND.png",
	"HEADPHONES.png",
	"HELMET.png",
	"HERCULES.png",
	"HORNS.png",
	"JASON.png",
	"KNIFE.png",
	"LIGHTS.png",
	"LINK.png",
	"MADHATTER.png",
	"MASK.png",
	"MEGARA.png",
	"MILITARY.png",
	"MINER.png",
	"MORTY.png",
	"NEST.png",
	"NINJA.png",
	"PAPER.png",
	"PAPERHAT.png",
	"PARTY.png",
	"PILOT.png",
	"PIRATE.png",
	"PLANT.png",
	"POLICE.png",
	"POMPADOUR.png",
	"POSTIT.png",
	"PRESENT.png",
	"REDQUEEN.png",
	"RENO.png",
	"RICK.png",
	"SAFARI.png",
	"SANTA.png",
	"SECURITY.png",
	"SHERIFF.png",
	"SIGN.png",
	"SNORKEL.png",
	"SNOW.png",
	"SNOWMAN.png",
	"SOLDIER.png",
	"STICKMAN.png",
	"STPATRICK.png",
	"SUNGLASSES.png",
	"TOPHAT.png",
	"TOWEL.png",
	"USHANKA.png",
	"VIKING.png",
	"WHITEHAT.png",
	"WHITERABBIT.png",
	"WILDWEST.png",
	"WINTER.png",
	"WITCH.png",
	"WOLF.png",
	"WORKER.png",
	"XMAS.png"
];

var petArray = [
	"BEDCRAB.png",
	"BEDCRAB2.png",
	"BRAINSLUG.png",
	"DOG.png",
	"HAMSTER.png",
	"MINI.png",
	"MINI10.png",
	"MINI11.png",
	"MINI12.png",
	"MINI2.png",
	"MINI3.png",
	"MINI4.png",
	"MINI5.png",
	"MINI6.png",
	"MINI7.png",
	"MINI8.png",
	"MINI9.png",
	"PANICO.png",
	"PEGASUS.png",
	"PENA.png",
	"ROBOT.png",
	"STICKMAN.png",
	"STICKWOMAN.png",
	"UFO.png"
];

var color;
var hat;
var body;
var pet;

function makeItem(){
	color = makeItemCnt(0, 13);
	hat = makeItemCnt(0, 122);
	body = makeItemCnt(0, 28);
	pet = makeItemCnt(0, 24);
}

function makeItemCnt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

var img_width, img_height;

$.fn.extend({Cubexy: function(opciones) {
					var Cubexy=this;
					var id=$(Cubexy).attr('id');
					defaults = {
						 idInputColor:'colores',
						 idDownload:'Descargar',
						 idPreview:'Preview',
						 CanvasSalida:'canvas',
						 attImagenGrande:'src',
						 cssDefault:true,
						 cssCambioColor:'actual',
						 cssParteActiva:'activo',
						 cssParteUnica:'seleccionado',
						 cssColorPicker:'colors'
					}
					
                    var opciones = $.extend({}, defaults, opciones);
					
					var idInputColor=opciones.idInputColor;  
					var idDownload=opciones.idDownload;
					var idPreview=opciones.idPreview;
					
					var CanvasSalida=opciones.CanvasSalida;
					var attImagenGrande=opciones.attImagenGrande;
					var cssDefault=opciones.cssDefault;
					
					var cssCambioColor=opciones.cssCambioColor;
					var cssParteActiva=opciones.cssParteActiva;
					var cssParteUnica=opciones.cssParteUnica;
					var cssColorPicker=opciones.cssColorPicker;
					
		 var Estilos='<style>#'+cssColorPicker+' { text-align: left;}#'+cssColorPicker+' li { display: inline-table;width: 20px;height: 20px;margin: 2px;width: 20px;height: 20px; cursor: pointer;}.'+cssParteUnica+'{border: #000000 2px outset;}</style>';
		 if(cssDefault){ $('body').before(Estilos); }
		 
         $('#'+idInputColor).before('<canvas style="display:none" id="tmpCanvas"></canvas>');   
         var canvas = document.getElementById(CanvasSalida);
         var ctx = canvas.getContext("2d");
		 ctx.clearRect(0, 0, ctx.width, ctx.height);
            var ImagenesIniciales = [];
            var base_image=[];
            if(!$('#'+id).find('div .'+cssCambioColor).hasClass(cssCambioColor)){
                  $('#'+id + ' div:first-child').addClass(cssCambioColor);
            }
            $('#' + id + ' > div').each(function () {
                 idParte = $(this).attr('id');
                 $('#' + idParte + ' >img').each(function () {
                 if(!$(this).hasClass( cssParteActiva )){
                    $('#' + idParte + ' img:first-child').addClass(cssParteActiva)
                 }
                });
            });
            
            var canvas = document.getElementById('canvas');
            var ctx = canvas.getContext("2d");
   		 	ctx.clearRect(0, 0, canvas.width, canvas.height);
   		 
            makeItem();
            //IniciarPintadoAvatar(colorArray[color], hatArray[hat], bodyArray[body], petArray[pet]); 
            
            var idx = 1;
            base_image[idx] = new Image();           
            base_image[idx].src = "Items/COLOR/" + colorArray[color];
            base_image[idx].onload = function(){
            	ctx.drawImage(base_image[idx],0,0,img_width,img_height);
            	idx++;
            	base_image[idx] = new Image();  
            	base_image[idx].src = "Items/HATS/" + hatArray[hat];
            	base_image[idx].onload = function(){
            		ctx.drawImage(base_image[idx],0,0,img_width,img_height);
            		idx++;
            		base_image[idx] = new Image();  
            		base_image[idx].src = "Items/BODY/" + bodyArray[body];
                	base_image[idx].onload = function(){
                		ctx.drawImage(base_image[idx],0,0,img_width,img_height);
                		idx++;
                		base_image[idx] = new Image();
                		base_image[idx].src = "Items/PETS/" + petArray[pet];
                    	base_image[idx].onload = function(){
                    		ctx.drawImage(base_image[idx],0,0,img_width,img_height);
                    	}
                	}
            	}
            }
            
            /*
            function IniciarPintadoAvatar(color, hat, body, pet){
            cimgContext=1;
            $('#' + id + ' > div').each(function () {
                idParte = $(this).attr('id');
                $('#' + idParte + ' >img').each(function () {
                   if($(this).hasClass( cssParteActiva )){
                     base_image[cimgContext] = new Image();
                     switch(cimgContext){
                     case 1:
                    	 base_image[cimgContext].src = "Items/COLOR/" + color;
                         base_image[cimgContext].enabled=true;
                         
                         base_image[cimgContext].onload = function(){	
                        	 ctx.drawImage(this,0,0,img_width,img_height);
                         }
                    	 break;
                     case 2:
                    	 base_image[cimgContext].src = "Items/HATS/" + hat;
                         base_image[cimgContext].enabled=true;
                         
                         base_image[cimgContext].onload = function(){	
                        	 ctx.drawImage(this,0,0,img_width,img_height);
                         }
                    	 break;
                     case 3:
                    	 base_image[cimgContext].src = "Items/BODY/" + body;
                         base_image[cimgContext].enabled=true;
                         
                         base_image[cimgContext].onload = function(){	
                        	 ctx.drawImage(this,0,0,img_width,img_height);
                         }
                    	 break;
                     case 4:
                    	 base_image[cimgContext].src = "Items/PETS/" + pet;
                         base_image[cimgContext].enabled=true;
                         
                         base_image[cimgContext].onload = function(){	
                        	 ctx.drawImage(this,0,0,img_width,img_height);
                         }
                    	 break;
                     }
                     cimgContext++;
                  }
                });
            });

          }
          */
	}
});