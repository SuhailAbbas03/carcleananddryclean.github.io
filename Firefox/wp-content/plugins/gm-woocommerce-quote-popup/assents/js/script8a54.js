jQuery( document ).ready(function() {
	jQuery( ".gmwqp_inq" ).click(function( event ) {
		var product_enquiry_title = jQuery(this).attr("title");
		var attr_id = jQuery(this).attr("attr_id");
		jQuery(".product_enquiry_title").html(product_enquiry_title);
		jQuery(".gmqqp_product_vl").val(product_enquiry_title);
		jQuery(".gmwqp_popup_op").bPopup({
           /* positionStyle : 'absolute',*/
			
           
        });
        jQuery(".gmqqp_product_id").val(attr_id);
            
		//jQuery(".gmwqp_popup_op").addClass("gmwqp_active");
		return false;
	});
	
    jQuery( ".gmwqp_popup_op_form" ).submit(function( event ) {
    	jQuery('body').addClass('gmwqp_loader');
    	jQuery(".gmwqpmsgc").remove();
    	var culms = jQuery(this);
    	var formdata = jQuery(this).serialize();
    	jQuery.ajax({
				    type: "post",
				    dataType: "json",
				    url: gmwqp_ajax_object.ajax_url,
				    data: formdata,
				    success: function(response){
				        if(response.msg=='error'){
				        	jQuery(".gmwqp_popupcontant").append(response.returnhtml);
				        }else{
				        	culms[0].reset();
				        	jQuery(".gmwqp_popupcontant").append(response.returnhtml);
				        	var evt = new CustomEvent("Gm_enquiry_submitted", {detail: response});
window.dispatchEvent(evt);
				        }
				        if(response.redirect=='yes'){
				        	setTimeout(function(){ 
				        		window.location.replace(response.redirect_to);
				        	}, 1500);
				        }
				        jQuery('body').removeClass('gmwqp_loader');
				        scrollSmoothToBottom('gmwqp_popupcontant');
				    }
				});
		return false;
    });
    function scrollSmoothToBottom (id) {
	   var div = document.getElementById(id);
	   jQuery('#' + id).animate({
	      scrollTop: div.scrollHeight - div.clientHeight
	   }, 500);
	}
});