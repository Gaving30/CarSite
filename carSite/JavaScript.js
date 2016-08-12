function init()
{
	displayDate();
	showMap();
}

function printpage()
{
	window.print();
}

function displayDate()
{
	var date = new Date()
	document.getElementById("timeDate").innerHTML= date.toLocaleTimeString();
}

function validateForm(form)
{
	var fNm = form.fname.value;
	var eMl = form.eMail.value;
	var com = form.comments.value;
	var apos=eMl.indexOf("@");
	var dotpos=eMl.lastIndexOf(".");
	if (fNm == "" || fNm == null)
	{
		alert("Please enter your name.");
		form.fname.focus();
		return false;
	}
	else if(eMl == ""  || eMl == null)
	{
		alert("Please enter your email.");
		form.eMail.focus();
		return false;
	}
	else if(apos<1||dotpos-apos<2)
	{
		alert("Not a valid email.");
		form.email.focus();
		return false;
	}
	else if(com == ""  || com == null)
	{
		alert("Please enter some comments.");
		form.comments.focus();
		return false;
	}
	else
	{
		return true;
	}
}

function showMap()
{
	var map;
	var latitude=53.347477;
	var longitude=-6.228218;

	// Change coordinates into a location
	var yourLocation = new google.maps.LatLng(latitude, longitude);

	//Setup map and position on map

    var myOptions = {
       	zoom: 15,
       	mapTypeId: google.maps.MapTypeId.ROADMAP,
       	center: yourLocation
    }

    map = new google.maps.Map(document.getElementById("map"), myOptions);
	// To add the marker to the map set it up then call setMap();
	var marker = new google.maps.Marker({
		position: yourLocation,
	    title:"O2 Arena"
	});

	marker.setMap(map);
}

function imgWindow()
{
			jQuery(document).ready(function($) {
				$('.lightbox_trigger').click(function(e) {

				e.preventDefault();
				var image_href = $(this).attr("href");

				if ($('#lightbox').length > 0)
				{
					// #lightbox exists
					$('#imgContent').html('<img src="' + image_href + '" alt="Car Image" />');
					$('#lightbox').show();
				}

				else
				{
					//#lightbox does not exist - create and insert (runs 1st time only)
					var lightbox =
					'<div id="lightbox">' +
						'<p>Click to close</p>' +
						'<div id="imgContent">' +
							'<img src="' + image_href +'" alt="Car Image"/>' +
						'</div>' +
					'</div>';
					$('body').append(lightbox);
				}

			});

			//Click anywhere on the page to get rid of lightbox window
			$('#lightbox').live('click', function() { //must use live, as the lightbox element is inserted into the DOM
				$('#lightbox').hide();
			});
		});
}