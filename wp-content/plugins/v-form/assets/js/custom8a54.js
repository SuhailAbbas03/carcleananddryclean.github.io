jQuery(function($){
    $(document).ready(function(){

        $('#toogleLeftPanel').click(function(){
            $('#leftPanel').css('left','160px');
        });

        $('#element-close-btn').click(function(){
            $('#leftPanel').css('left','-560px');
        });

        $('#settings-close-btn').click(function(){
          $('#rightPanel').css('right','-560px');
          $('.vform-group').each(function(){
            $(this).removeClass('vform-group-active');
          });
        });


        $('#vformbuild').click(function(){
          $('#settingleft').css('left','-560px');
          $('#vform-mainfields').show();
          $('#maincontsetting').hide();
          $('#tooglevformsetting').removeClass('isActive');
          $('#vformbuild').addClass('isActive');
         });

         
         var emstup = [];
         $('#tooglevformsetting').click(function(){
          $('#maincontsetting').show();
          $('#leftPanel').css('left','-560px');
          $('#rightPanel').css('right','-560px');

          $('#settingleft').css('left','160px');
          $('#vform-mainfields').hide();

          $('#vformbuild').removeClass('isActive');
          $('#tooglevformsetting').addClass('isActive');

            // smart tags
            $('.smart-tags-list-display').html('<li class="heading">Available Fields</li>');
            $(".vform-group").each(function(){
                var getprid = $(this).data('batchid');
                var strfrm = $(this).data('type');
                var labletext = $(this).children('label').text();
                labletext = labletext.replace('*','');
                if(strfrm!='' && strfrm!=undefined && strfrm!='submit'){
                  emstup.push('{'+strfrm+'_id="'+getprid+'"}');
                  $('.smart-tags-list-display').append('<li class="clickmergevform" data-field={'+strfrm+'_id="'+getprid+'"}>'+strfrm+' ('+labletext+')'+'</li>');
                }
            });
            // smart tags
         });


        var generateid = 0;
        function gen_vform_title(generateid,type){
    
            var a;
    
            switch (type) {
              case 'heading':
                a = '<div class="vform-group" data-type="heading" data-batchid="'+generateid+'" id="vform-group'+generateid+'"><label class="vform-heading"><span class="text text-headingvf">Heading</span><span class="required">*</span></label><div class="vform-cpy-del"><button type="button" class="sc-properties"><i class="fa fa-cog" aria-hidden="true"></i><span>Properties</span></button><button type="button" class="sc-Remove"><i class="fa fa-trash" aria-hidden="true"></i><span>Delete</span></button></div><div class="vform-cpy-del dupleftonly"><button type="button" class="sc-Duplicate"><i class="fa fa-clone" aria-hidden="true"></i><span>Duplicate</span></button></div><div class="vform-description"></div></div>';
    
                break;
              case 'title':
                a = '<div class="vform-group" data-type="title" data-batchid="'+generateid+'" id="vform-group'+generateid+'"><label class="vform-heading"><span class="text">Your Title</span><span class="required">*</span></label><div class="vform-cpy-del"><button type="button" class="sc-properties"><i class="fa fa-cog" aria-hidden="true"></i><span>Properties</span></button><button type="button" class="sc-Remove"><i class="fa fa-trash" aria-hidden="true"></i><span>Delete</span></button></div><div class="vform-cpy-del dupleftonly"><button type="button" class="sc-Duplicate"><i class="fa fa-clone" aria-hidden="true"></i><span>Duplicate</span></button></div><div class="vform-description"></div></div>';
    
                break;
                case 'singleline':
                  a = '<div class="vform-group" data-type="singleline" data-batchid="'+generateid+'" id="vform-group'+generateid+'"><label class="vform-heading"><span class="text">Single Line Text</span><span class="required">*</span></label><div class="vform-format-selected"><div class="vform-cpy-del"><button type="button" class="sc-properties"><i class="fa fa-cog" aria-hidden="true"></i><span>Properties</span></button><button type="button" class="sc-Remove"><i class="fa fa-trash" aria-hidden="true"></i><span>Delete</span></button></div><div class="vform-cpy-del dupleftonly"><button type="button" class="sc-Duplicate"><i class="fa fa-clone" aria-hidden="true"></i><span>Duplicate</span></button></div><div class="vform-singleline-text"><input type="text" placeholder="" class="primary-input" disabled="" name="singleline[]"></div></div><div class="vform-description"></div></div>';
    
                break;
                case 'paragraph':
                  a = '<div class="vform-group" data-type="paragraph" data-batchid="'+generateid+'" id="vform-group'+generateid+'"><label class="vform-heading"><span class="text">Paragraph Text</span><span class="required">*</span></label><div class="vform-format-selected"><div class="vform-cpy-del"><button type="button" class="sc-properties"><i class="fa fa-cog" aria-hidden="true"></i><span>Properties</span></button><button type="button" class="sc-Remove"><i class="fa fa-trash" aria-hidden="true"></i><span>Delete</span></button></div><div class="vform-cpy-del dupleftonly"><button type="button" class="sc-Duplicate"><i class="fa fa-clone" aria-hidden="true"></i><span>Duplicate</span></button></div><div class="vform-paragraph"><textarea placeholder="" class="primary-input" disabled="" name="paragraph[]"></textarea></div></div><div class="vform-description"></div></div>';
    
                 break;
                 case 'dropdown':
                  a = '<div class="vform-group" data-type="dropdown" data-batchid="'+generateid+'" id="vform-group'+generateid+'"><label class="vform-heading"><span class="text">Dropdown</span><span class="required">*</span></label><div class="vform-format-selected"><div class="vform-cpy-del"><button type="button" class="sc-properties"><i class="fa fa-cog" aria-hidden="true"></i><span>Properties</span></button><button type="button" class="sc-Remove"><i class="fa fa-trash" aria-hidden="true"></i><span>Delete</span></button></div><div class="vform-cpy-del dupleftonly"><button type="button" class="sc-Duplicate"><i class="fa fa-clone" aria-hidden="true"></i><span>Duplicate</span></button></div><div class="vform-dropdown"><select class="primary-input" disabled="" name="dropdown[]"><option value="First Choice">First Choice</option></select></div></div><div class="vform-description"></div></div>';
    
                break;
                case 'multiplechoice':
                  a = '<div class="vform-group" data-type="multiplechoice" data-batchid="'+generateid+'" id="vform-group'+generateid+'"><label class="vform-heading"><span class="text">Multiple Choice</span><span class="required">*</span></label><div class="vform-format-selected"><div class="vform-cpy-del"><button type="button" class="sc-properties"><i class="fa fa-cog" aria-hidden="true"></i><span>Properties</span></button><button type="button" class="sc-Remove"><i class="fa fa-trash" aria-hidden="true"></i><span>Delete</span></button></div><div class="vform-cpy-del dupleftonly"><button type="button" class="sc-Duplicate"><i class="fa fa-clone" aria-hidden="true"></i><span>Duplicate</span></button></div><div class="vform-multiplechoice"><ul class="primary-input"><li class=""><input type="radio" disabled="" value="First Choice" name="multiplechoice[]" >First Choice</li><li class=""><input type="radio" disabled="" value="Second Choice" name="multiplechoice[]">Second Choice</li><li class=""><input type="radio" disabled="" value="Third Choice" name="multiplechoice[]">Third Choice</li></ul></div></div><div class="vform-description"></div></div>';
    
                 break;
                case 'checkboxes':
                 a = '<div class="vform-group" data-type="Checkboxes" data-batchid="'+generateid+'" id="vform-group'+generateid+'"><label class="vform-heading"><span class="text">Checkboxes</span><span class="required">*</span></label><div class="vform-format-selected"><div class="vform-cpy-del"><button type="button" class="sc-properties"><i class="fa fa-cog" aria-hidden="true"></i><span>Properties</span></button><button type="button" class="sc-Remove"><i class="fa fa-trash" aria-hidden="true"></i><span>Delete</span></button></div><div class="vform-cpy-del dupleftonly"><button type="button" class="sc-Duplicate"><i class="fa fa-clone" aria-hidden="true"></i><span>Duplicate</span></button></div><div class="vform-checkbox"><ul class="primary-input"><li class=""><input type="checkbox" disabled="" value="First Choice" name="checkbox[]">First Choice</li><li class=""><input type="checkbox" disabled="" value="Second Choice" name="checkbox[]">Second Choice</li><li class=""><input type="checkbox" disabled="" value="Third Choice" name="checkbox[]">Third Choice</li></ul></div></div><div class="vform-description"></div></div>';
    
                break;
                case 'number':
                 a = '<div class="vform-group" data-type="number" data-batchid="'+generateid+'" id="vform-group'+generateid+'"><label class="vform-heading"><span class="text">Numbers</span><span class="required">*</span></label><div class="vform-format-selected"><div class="vform-cpy-del"><button type="button" class="sc-properties"><i class="fa fa-cog" aria-hidden="true"></i><span>Properties</span></button><button type="button" class="sc-Remove"><i class="fa fa-trash" aria-hidden="true"></i><span>Delete</span></button></div><div class="vform-cpy-del dupleftonly"><button type="button" class="sc-Duplicate"><i class="fa fa-clone" aria-hidden="true"></i><span>Duplicate</span></button></div><div class="vform-number"><input type="number" name="number[]" placeholder="" class="primary-input" disabled=""></div></div><div class="vform-description"></div></div>';
    
                break;
                case 'name':
                 a = '<div class="vform-group" data-type="name" data-batchid="'+generateid+'" id="vform-group'+generateid+'"><label class="vform-heading"><span class="text">Name </span><span class="required">*</span></label><div class="vform-cpy-del"><button type="button" class="sc-properties"><i class="fa fa-cog" aria-hidden="true"></i><span>Properties</span></button><button type="button" class="sc-Remove"><i class="fa fa-trash" aria-hidden="true"></i><span>Delete</span></button></div><div class="vform-cpy-del dupleftonly"><button type="button" class="sc-Duplicate"><i class="fa fa-clone" aria-hidden="true"></i><span>Duplicate</span></button></div><div class="vform-format-selected"><div class="vform-first-name"><input type="text" placeholder="" class="primary-input" disabled="" name="firstname[]"><label class="vform-sub-label">First</label></div><div class="vform-middle-name"><input type="text" placeholder="" class="primary-input" disabled="" name="middlename[]"><label class="vform-sub-label">Middle</label></div><div class="vform-last-name"><input type="text" placeholder="" name="lastname[]" class="primary-input" disabled=""><label class="vform-sub-label">Last</label></div></div><div class="vform-description"></div></div>';
    
                break;
                case 'email':
                 a = '<div class="vform-group" data-type="email" data-batchid="'+generateid+'" id="vform-group'+generateid+'"><label class="vform-heading"><span class="text">Email </span><span class="required">*</span></label><div class="vform-format-selected"><div class="vform-cpy-del"><button type="button" class="sc-properties"><i class="fa fa-cog" aria-hidden="true"></i><span>Properties</span></button><button type="button" class="sc-Remove"><i class="fa fa-trash" aria-hidden="true"></i><span>Delete</span></button></div><div class="vform-cpy-del dupleftonly"><button type="button" class="sc-Duplicate"><i class="fa fa-clone" aria-hidden="true"></i><span>Duplicate</span></button></div><div class="vform-email"><input type="email" name="email[]" placeholder="" class="primary-input" disabled=""></div></div><div class="vform-description"></div></div>';
    
                break;
                case 'submit':
                 a = '<div class="vform-group" data-type="submit" data-batchid="'+generateid+'" id="vform-group'+generateid+'"><div class="vform-cpy-del"><button type="button" class="sc-properties"><i class="fa fa-cog" aria-hidden="true"></i><span>Properties</span></button><button type="button" class="sc-Remove"><i class="fa fa-trash" aria-hidden="true"></i><span>Delete</span></button></div><div class="vform-cpy-del dupleftonly"><button type="button" class="sc-Duplicate"><i class="fa fa-clone" aria-hidden="true"></i><span>Duplicate</span></button></div><div class="vform-format-selected"><input type="submit" class="vform-main-submit" value="Submit"></div></div>';
    
                break;
                case 'websiteurl':
                 a = '<div class="vform-group" data-type="websiteurl" data-batchid="'+generateid+'" id="vform-group'+generateid+'"><label class="vform-heading"><span class="text">Website / Url</span><span class="required">*</span></label><div class="vform-format-selected"><div class="vform-cpy-del"><button type="button" class="sc-properties"><i class="fa fa-cog" aria-hidden="true"></i><span>Properties</span></button><button type="button" class="sc-Remove"><i class="fa fa-trash" aria-hidden="true"></i><span>Delete</span></button></div><div class="vform-cpy-del dupleftonly"><button type="button" class="sc-Duplicate"><i class="fa fa-clone" aria-hidden="true"></i><span>Duplicate</span></button></div><div class="vform-websiteurl"><input type="url" name="websiteurl[]" placeholder="" class="primary-input" disabled=""></div></div><div class="vform-description"></div></div>';
    
                break;
                case 'address':
                  a = '<div class="vform-group" data-type="address" data-batchid="'+generateid+'" id="vform-group'+generateid+'"><label class="vform-heading"><span class="text">Address</span><span class="required">*</span></label><div class="vform-format-selected"><div class="vform-cpy-del"><button type="button" class="sc-properties"><i class="fa fa-cog" aria-hidden="true"></i><span>Properties</span></button><button type="button" class="sc-Remove"><i class="fa fa-trash" aria-hidden="true"></i><span>Delete</span></button></div><div class="vform-cpy-del dupleftonly"><button type="button" class="sc-Duplicate"><i class="fa fa-clone" aria-hidden="true"></i><span>Duplicate</span></button></div><div class="vform-address"><input type="text" name="full_address[]" placeholder="Full Address..." class="primary-input" disabled=""><p></p><input type="text" name="city_name[]" placeholder="City Name..." class="primary-input" disabled=""><p></p><input type="text" name="state_name[]" placeholder="State / Province..." class="primary-input" disabled=""><p></p><input type="number" name="zip_code[]" placeholder="Zip Code..." class="primary-input" disabled=""><p></p><select name="shipping_country[]" class="primary-input" disabled=""><option value="">Select Country</option><option value="">------------------------------</option><option value="US">United States</option><option value="CA">Canada</option><option value="GB">United Kingdom</option><option value="IE">Ireland</option><option value="AU">Australia</option><option value="NZ">New Zealand</option><option value="">------------------------------</option><option value="AF">Afghanistan</option><option value="AX">Aland Islands</option><option value="AL">Albania</option><option value="DZ">Algeria</option><option value="AS">American Samoa</option><option value="AD">Andorra</option><option value="AO">Angola</option><option value="AI">Anguilla</option><option value="AQ">Antarctica</option><option value="AG">Antigua and Barbuda</option><option value="AR">Argentina</option><option value="AM">Armenia</option><option value="AW">Aruba</option><option value="AU">Australia</option><option value="AT">Austria</option><option value="AZ">Azerbaijan</option><option value="BS">Bahamas</option><option value="BH">Bahrain</option><option value="BD">Bangladesh</option><option value="BB">Barbados</option><option value="BY">Belarus</option><option value="BE">Belgium</option><option value="BZ">Belize</option><option value="BJ">Benin</option><option value="BM">Bermuda</option><option value="BT">Bhutan</option><option value="BO">Bolivia</option><option value="BQ">Bonaire, Saint Eustatius and Saba </option><option value="BA">Bosnia and Herzegovina</option><option value="BW">Botswana</option><option value="BV">Bouvet Island</option><option value="BR">Brazil</option><option value="IO">British Indian Ocean Territory</option><option value="VG">British Virgin Islands</option><option value="BN">Brunei</option><option value="BG">Bulgaria</option><option value="BF">Burkina Faso</option><option value="BI">Burundi</option><option value="KH">Cambodia</option><option value="CM">Cameroon</option><option value="CA">Canada</option><option value="CV">Cape Verde</option><option value="KY">Cayman Islands</option><option value="CF">Central African Republic</option><option value="TD">Chad</option><option value="CL">Chile</option><option value="CN">China</option><option value="CX">Christmas Island</option><option value="CC">Cocos Islands</option><option value="CO">Colombia</option><option value="KM">Comoros</option><option value="CK">Cook Islands</option><option value="CR">Costa Rica</option><option value="HR">Croatia</option><option value="CU">Cuba</option><option value="CW">Curacao</option><option value="CY">Cyprus</option><option value="CZ">Czech Republic</option><option value="CD">Democratic Republic of the Congo</option><option value="DK">Denmark</option><option value="DJ">Djibouti</option><option value="DM">Dominica</option><option value="DO">Dominican Republic</option><option value="TL">East Timor</option><option value="EC">Ecuador</option><option value="EG">Egypt</option><option value="SV">El Salvador</option><option value="GQ">Equatorial Guinea</option><option value="ER">Eritrea</option><option value="EE">Estonia</option><option value="ET">Ethiopia</option><option value="FK">Falkland Islands</option><option value="FO">Faroe Islands</option><option value="FJ">Fiji</option><option value="FI">Finland</option><option value="FR">France</option><option value="GF">French Guiana</option><option value="PF">French Polynesia</option><option value="TF">French Southern Territories</option><option value="GA">Gabon</option><option value="GM">Gambia</option><option value="GE">Georgia</option><option value="DE">Germany</option><option value="GH">Ghana</option><option value="GI">Gibraltar</option><option value="GR">Greece</option><option value="GL">Greenland</option><option value="GD">Grenada</option><option value="GP">Guadeloupe</option><option value="GU">Guam</option><option value="GT">Guatemala</option><option value="GG">Guernsey</option><option value="GN">Guinea</option><option value="GW">Guinea-Bissau</option><option value="GY">Guyana</option><option value="HT">Haiti</option><option value="HM">Heard Island and McDonald Islands</option><option value="HN">Honduras</option><option value="HK">Hong Kong</option><option value="HU">Hungary</option><option value="IS">Iceland</option><option value="IN">India</option><option value="ID">Indonesia</option><option value="IR">Iran</option><option value="IQ">Iraq</option><option value="IE">Ireland</option><option value="IM">Isle of Man</option><option value="IL">Israel</option><option value="IT">Italy</option><option value="CI">Ivory Coast</option><option value="JM">Jamaica</option><option value="JP">Japan</option><option value="JE">Jersey</option><option value="JO">Jordan</option><option value="KZ">Kazakhstan</option><option value="KE">Kenya</option><option value="KI">Kiribati</option><option value="XK">Kosovo</option><option value="KW">Kuwait</option><option value="KG">Kyrgyzstan</option><option value="LA">Laos</option><option value="LV">Latvia</option><option value="LB">Lebanon</option><option value="LS">Lesotho</option><option value="LR">Liberia</option><option value="LY">Libya</option><option value="LI">Liechtenstein</option><option value="LT">Lithuania</option><option value="LU">Luxembourg</option><option value="MO">Macao</option><option value="MK">Macedonia</option><option value="MG">Madagascar</option><option value="MW">Malawi</option><option value="MY">Malaysia</option><option value="MV">Maldives</option><option value="ML">Mali</option><option value="MT">Malta</option><option value="MH">Marshall Islands</option><option value="MQ">Martinique</option><option value="MR">Mauritania</option><option value="MU">Mauritius</option><option value="YT">Mayotte</option><option value="MX">Mexico</option><option value="FM">Micronesia</option><option value="MD">Moldova</option><option value="MC">Monaco</option><option value="MN">Mongolia</option><option value="ME">Montenegro</option><option value="MS">Montserrat</option><option value="MA">Morocco</option><option value="MZ">Mozambique</option><option value="MM">Myanmar</option><option value="NA">Namibia</option><option value="NR">Nauru</option><option value="NP">Nepal</option><option value="NL">Netherlands</option><option value="NC">New Caledonia</option><option value="NZ">New Zealand</option><option value="NI">Nicaragua</option><option value="NE">Niger</option><option value="NG">Nigeria</option><option value="NU">Niue</option><option value="NF">Norfolk Island</option><option value="KP">North Korea</option><option value="MP">Northern Mariana Islands</option><option value="NO">Norway</option><option value="OM">Oman</option><option value="PK">Pakistan</option><option value="PW">Palau</option><option value="PS">Palestinian Territory</option><option value="PA">Panama</option><option value="PG">Papua New Guinea</option><option value="PY">Paraguay</option><option value="PE">Peru</option><option value="PH">Philippines</option><option value="PN">Pitcairn</option><option value="PL">Poland</option><option value="PT">Portugal</option><option value="PR">Puerto Rico</option><option value="QA">Qatar</option><option value="CG">Republic of the Congo</option><option value="RE">Reunion</option><option value="RO">Romania</option><option value="RU">Russia</option><option value="RW">Rwanda</option><option value="BL">Saint Barthelemy</option><option value="SH">Saint Helena</option><option value="KN">Saint Kitts and Nevis</option><option value="LC">Saint Lucia</option><option value="MF">Saint Martin</option><option value="PM">Saint Pierre and Miquelon</option><option value="VC">Saint Vincent and the Grenadines</option><option value="WS">Samoa</option><option value="SM">San Marino</option><option value="ST">Sao Tome and Principe</option><option value="SA">Saudi Arabia</option><option value="SN">Senegal</option><option value="RS">Serbia</option><option value="SC">Seychelles</option><option value="SL">Sierra Leone</option><option value="SG">Singapore</option><option value="SX">Sint Maarten</option><option value="SK">Slovakia</option><option value="SI">Slovenia</option><option value="SB">Solomon Islands</option><option value="SO">Somalia</option><option value="ZA">South Africa</option><option value="GS">South Georgia and the South Sandwich Islands</option><option value="KR">South Korea</option><option value="SS">South Sudan</option><option value="ES">Spain</option><option value="LK">Sri Lanka</option><option value="SD">Sudan</option><option value="SR">Suriname</option><option value="SJ">Svalbard and Jan Mayen</option><option value="SZ">Swaziland</option><option value="SE">Sweden</option><option value="CH">Switzerland</option><option value="SY">Syria</option><option value="TW">Taiwan</option><option value="TJ">Tajikistan</option><option value="TZ">Tanzania</option><option value="TH">Thailand</option><option value="TG">Togo</option><option value="TK">Tokelau</option><option value="TO">Tonga</option><option value="TT">Trinidad and Tobago</option><option value="TN">Tunisia</option><option value="TR">Turkey</option><option value="TM">Turkmenistan</option><option value="TC">Turks and Caicos Islands</option><option value="TV">Tuvalu</option><option value="VI">U.S. Virgin Islands</option><option value="UG">Uganda</option><option value="UA">Ukraine</option><option value="AE">United Arab Emirates</option><option value="GB">United Kingdom</option><option value="US">United States</option><option value="UM">United States Minor Outlying Islands</option><option value="UY">Uruguay</option><option value="UZ">Uzbekistan</option><option value="VU">Vanuatu</option><option value="VA">Vatican</option><option value="VE">Venezuela</option><option value="VN">Vietnam</option><option value="WF">Wallis and Futuna</option><option value="EH">Western Sahara</option><option value="YE">Yemen</option><option value="ZM">Zambia</option><option value="ZW">Zimbabwe</option></select></div></div><div class="vform-description"></div></div>';
    
                break;
                case 'phone':
                  a = '<div class="vform-group" data-type="phone" data-batchid="'+generateid+'" id="vform-group'+generateid+'"><label class="vform-heading"><span class="text">Phone</span><span class="required">*</span></label><div class="vform-format-selected"><div class="vform-cpy-del"><button type="button" class="sc-properties"><i class="fa fa-cog" aria-hidden="true"></i><span>Properties</span></button><button type="button" class="sc-Remove"><i class="fa fa-trash" aria-hidden="true"></i><span>Delete</span></button></div><div class="vform-cpy-del dupleftonly"><button type="button" class="sc-Duplicate"><i class="fa fa-clone" aria-hidden="true"></i><span>Duplicate</span></button></div><div class="vform-phone"><input type="tel" name="phone[]" placeholder="" class="primary-input" disabled=""></div></div><div class="vform-description"></div></div>';
    
                break;
                case 'password':
                  a = '<div class="vform-group" data-type="password" data-batchid="'+generateid+'" id="vform-group'+generateid+'"><label class="vform-heading"><span class="text">Password</span><span class="required">*</span></label><div class="vform-format-selected"><div class="vform-cpy-del"><button type="button" class="sc-properties"><i class="fa fa-cog" aria-hidden="true"></i><span>Properties</span></button><button type="button" class="sc-Remove"><i class="fa fa-trash" aria-hidden="true"></i><span>Delete</span></button></div><div class="vform-cpy-del dupleftonly"><button type="button" class="sc-Duplicate"><i class="fa fa-clone" aria-hidden="true"></i><span>Duplicate</span></button></div><div class="vform-password"><input type="password" name="password[]" placeholder="" class="primary-input" disabled=""></div></div><div class="vform-description"></div></div>';
    
                break;
                case 'datetime':
                  a = '<div class="vform-group" data-type="datetime" data-batchid="'+generateid+'" id="vform-group'+generateid+'"><label class="vform-heading"><span class="text">Date & Time</span><span class="required">*</span></label><div class="vform-format-selected"><div class="vform-cpy-del"><button type="button" class="sc-properties"><i class="fa fa-cog" aria-hidden="true"></i><span>Properties</span></button><button type="button" class="sc-Remove"><i class="fa fa-trash" aria-hidden="true"></i><span>Delete</span></button></div><div class="vform-cpy-del dupleftonly"><button type="button" class="sc-Duplicate"><i class="fa fa-clone" aria-hidden="true"></i><span>Duplicate</span></button></div><div class="vform-datetime"><input type="datetime-local" name="datetime[]" placeholder="" class="primary-input" disabled=""></div></div><div class="vform-description"></div></div>';
    
                break;
                case 'hidden':
                  a = '<div class="vform-group" data-type="hidden" data-batchid="'+generateid+'" id="vform-group'+generateid+'"><label class="vform-heading"><span class="text">Hidden</span><span class="required">*</span></label><div class="vform-format-selected"><div class="vform-cpy-del"><button type="button" class="sc-properties"><i class="fa fa-cog" aria-hidden="true"></i><span>Properties</span></button><button type="button" class="sc-Remove"><i class="fa fa-trash" aria-hidden="true"></i><span>Delete</span></button></div><div class="vform-cpy-del dupleftonly"><button type="button" class="sc-Duplicate"><i class="fa fa-clone" aria-hidden="true"></i><span>Duplicate</span></button></div><div class="vform-hidden"><input type="hidden" name="hidden[]" placeholder="" class="primary-input" disabled=""></div></div><div class="vform-description"></div></div>';
    
               break;
                case 'pagebreak':
                  a = '<div class="vform-group" data-type="pagebreak" data-batchid="'+generateid+'" id="vform-group'+generateid+'"><div class="vform-cpy-del"><button type="button" class="sc-properties"><i class="fa fa-cog" aria-hidden="true"></i><span>Properties</span></button><button type="button" class="sc-Remove"><i class="fa fa-trash" aria-hidden="true"></i><span>Delete</span></button></div><div class="vform-cpy-del dupleftonly"><button type="button" class="sc-Duplicate"><i class="fa fa-clone" aria-hidden="true"></i><span>Duplicate</span></button></div><br></div>';
    
                break;
                case 'divider':
                  a = '<div class="vform-group" data-type="divider" data-batchid="'+generateid+'" id="vform-group'+generateid+'"><div class="vform-cpy-del"><button type="button" class="sc-properties"><i class="fa fa-cog" aria-hidden="true"></i><span>Properties</span></button><button type="button" class="sc-Remove"><i class="fa fa-trash" aria-hidden="true"></i><span>Delete</span></button></div><div class="vform-cpy-del dupleftonly"><button type="button" class="sc-Duplicate"><i class="fa fa-clone" aria-hidden="true"></i><span>Duplicate</span></button></div><hr></div>';
    
                break;
                case 'termscondition':
                  a = '<div class="vform-group" data-type="termscondition" data-batchid="'+generateid+'" id="vform-group'+generateid+'"><div class="vform-format-selected"><div class="vform-cpy-del"><button type="button" class="sc-properties"><i class="fa fa-cog" aria-hidden="true"></i><span>Properties</span></button><button type="button" class="sc-Remove"><i class="fa fa-trash" aria-hidden="true"></i><span>Delete</span></button></div><div class="vform-cpy-del dupleftonly"><button type="button" class="sc-Duplicate"><i class="fa fa-clone" aria-hidden="true"></i><span>Duplicate</span></button></div><div class="vform-termscondition"><input type="checkbox" name="termscondition[]" placeholder="" class="primary-input" disabled=""><span class="insidetermscondition">Yes i agree</span></div></div><div class="vform-description"></div></div>';
    
                break;
                case 'link':
                  a = '<div class="vform-group" data-type="link" data-batchid="'+generateid+'" id="vform-group'+generateid+'"><div class="vform-format-selected"><div class="vform-cpy-del"><button type="button" class="sc-properties"><i class="fa fa-cog" aria-hidden="true"></i><span>Properties</span></button><button type="button" class="sc-Remove"><i class="fa fa-trash" aria-hidden="true"></i><span>Delete</span></button></div><div class="vform-cpy-del dupleftonly"><button type="button" class="sc-Duplicate"><i class="fa fa-clone" aria-hidden="true"></i><span>Duplicate</span></button></div><div class="vform-link"><a class="insideclick" href="" target="_self">Click here</a></div></div></div>';
    
                break;
                case 'image':
                  a = '<div class="vform-group" data-type="image" data-batchid="'+generateid+'" id="vform-group'+generateid+'"><div class="vform-format-selected"><div class="vform-cpy-del"><button type="button" class="sc-properties"><i class="fa fa-cog" aria-hidden="true"></i><span>Properties</span></button><button type="button" class="sc-Remove"><i class="fa fa-trash" aria-hidden="true"></i><span>Delete</span></button></div><div class="vform-cpy-del dupleftonly"><button type="button" class="sc-Duplicate"><i class="fa fa-clone" aria-hidden="true"></i><span>Duplicate</span></button></div><div class="vform-image"><img src="https://dummyimage.com/16:9x1080/" class="vfinsideimage"></div></div></div>';
    
                break;
                case 'date':
                  a = '<div class="vform-group" data-type="date" data-batchid="'+generateid+'" id="vform-group'+generateid+'"><label class="vform-heading"><span class="text">Date</span><span class="required">*</span></label><div class="vform-format-selected"><div class="vform-cpy-del"><button type="button" class="sc-properties"><i class="fa fa-cog" aria-hidden="true"></i><span>Properties</span></button><button type="button" class="sc-Remove"><i class="fa fa-trash" aria-hidden="true"></i><span>Delete</span></button></div><div class="vform-cpy-del dupleftonly"><button type="button" class="sc-Duplicate"><i class="fa fa-clone" aria-hidden="true"></i><span>Duplicate</span></button></div><div class="vform-date"><input type="date" name="date[]" placeholder="" class="primary-input" disabled=""></div></div><div class="vform-description"></div></div>';
    
                break;
                case 'time':
                  a = '<div class="vform-group" data-type="time" data-batchid="'+generateid+'" id="vform-group'+generateid+'"><label class="vform-heading"><span class="text">Time</span><span class="required">*</span></label><div class="vform-format-selected"><div class="vform-cpy-del"><button type="button" class="sc-properties"><i class="fa fa-cog" aria-hidden="true"></i><span>Properties</span></button><button type="button" class="sc-Remove"><i class="fa fa-trash" aria-hidden="true"></i><span>Delete</span></button></div><div class="vform-cpy-del dupleftonly"><button type="button" class="sc-Duplicate"><i class="fa fa-clone" aria-hidden="true"></i><span>Duplicate</span></button></div><div class="vform-time"><input type="time" name="time[]" placeholder="" class="primary-input" disabled=""></div></div><div class="vform-description"></div></div>';
    
                break;
                case 'month':
                  a = '<div class="vform-group" data-type="month" data-batchid="'+generateid+'" id="vform-group'+generateid+'"><label class="vform-heading"><span class="text">Months</span><span class="required">*</span></label><div class="vform-format-selected"><div class="vform-cpy-del"><button type="button" class="sc-properties"><i class="fa fa-cog" aria-hidden="true"></i><span>Properties</span></button><button type="button" class="sc-Remove"><i class="fa fa-trash" aria-hidden="true"></i><span>Delete</span></button></div><div class="vform-cpy-del dupleftonly"><button type="button" class="sc-Duplicate"><i class="fa fa-clone" aria-hidden="true"></i><span>Duplicate</span></button></div><div class="vform-month"><select name="month[]" class="primary-input" disabled=""><option value="none" selected>--Select Month--</option><option value="Janaury">Janaury</option><option value="February">February</option><option value="March">March</option><option value="April">April</option><option value="May">May</option><option value="June">June</option><option value="July">July</option><option value="August">August</option><option value="September">September</option><option value="October">October</option><option value="November">November</option><option value="December">December</option></select></div></div><div class="vform-description"></div></div>';
                  break;
    
                case 'week':
                  a = '<div class="vform-group" data-type="week" data-batchid="'+generateid+'" id="vform-group'+generateid+'"><label class="vform-heading"><span class="text">Weeks</span><span class="required">*</span></label><div class="vform-format-selected"><div class="vform-cpy-del"><button type="button" class="sc-properties"><i class="fa fa-cog" aria-hidden="true"></i><span>Properties</span></button><button type="button" class="sc-Remove"><i class="fa fa-trash" aria-hidden="true"></i><span>Delete</span></button></div><div class="vform-cpy-del dupleftonly"><button type="button" class="sc-Duplicate"><i class="fa fa-clone" aria-hidden="true"></i><span>Duplicate</span></button></div><div class="vform-week"><select name="week[]" placeholder="" class="primary-input" disabled=""><option value="none" selected>--Select Week--</option><option value="Sunday">Sunday</option><option value="Monday">Monday</option><option value="Tuesday">Tuesday</option><option value="Thursday">Thursday</option><option value="Friday">Friday</option><option value="Saturday">Saturday</option><select></div></div><div class="vform-description"></div></div>';
    
                break;
                case 'color':
                  a = '<div class="vform-group" data-type="color" data-batchid="'+generateid+'" id="vform-group'+generateid+'"><label class="vform-heading"><span class="text">Color</span><span class="required">*</span></label><div class="vform-format-selected"><div class="vform-cpy-del"><button type="button" class="sc-properties"><i class="fa fa-cog" aria-hidden="true"></i><span>Properties</span></button><button type="button" class="sc-Remove"><i class="fa fa-trash" aria-hidden="true"></i><span>Delete</span></button></div><div class="vform-cpy-del dupleftonly"><button type="button" class="sc-Duplicate"><i class="fa fa-clone" aria-hidden="true"></i><span>Duplicate</span></button></div><div class="vform-color"><input type="color" name="color[]" placeholder="" class="primary-input" disabled=""></div></div><div class="vform-description"></div></div>';
    
                break;
                case 'button':
                  a = '<div class="vform-group" data-type="button" data-batchid="'+generateid+'" id="vform-group'+generateid+'"><div class="vform-format-selected"><div class="vform-cpy-del"><button type="button" class="sc-properties"><i class="fa fa-cog" aria-hidden="true"></i><span>Properties</span></button><button type="button" class="sc-Remove"><i class="fa fa-trash" aria-hidden="true"></i><span>Delete</span></button></div><div class="vform-cpy-del dupleftonly"><button type="button" class="sc-Duplicate"><i class="fa fa-clone" aria-hidden="true"></i><span>Duplicate</span></button></div><div class="vform-button"><a href="" class="vfinsidebtn" target="_self" style="background: #0a72bd; color: #fff;text-decoration: none;float: left;padding: 10px 20px;">Click Me</a></div></div></div>';
    
                break;
    
              default:
    
            }
            return a;
    
        }
        var submitcount = 0;

                
        if($('[name="vformeditmode"]').val()!='' && $('[name="vformeditmode"]').val()!=undefined){
          generateid = $('[name="vformeditmode"]').val();
        }
        
        if($('.vform-main-submit').val()!=undefined){
          submitcount = 1;
          $('#field_item_control_button').addClass('vform-fielddisabled');
        }
        console.log(submitcount);

        $('.fieldSection-list .field-item').click(function(){
            var insidevalue = $(this).data('fieldtype');
            if(insidevalue=='submit' && submitcount==0){
              submitcount = 1;
              $(this).addClass('vform-fielddisabled');
              $('.vform-mainfields-inside').append(gen_vform_title(generateid,insidevalue));
            }else if(insidevalue!='submit'){
              $('.vform-mainfields-inside').append(gen_vform_title(generateid,insidevalue));
            }
      
      
            generateid++;
        });

        // clone
        $('#vform-mainfields').delegate(".sc-Duplicate", "click", function(){
          var mnid = $(this).parents(".vform-group").attr('id');
          var insidevalue = $('#'+mnid).data('type');
          var insidedata = $('#'+mnid).html();

          if(insidevalue=='submit' && submitcount==0){
            $('#'+mnid).after(gen_vform_title(generateid,insidevalue));
          }else if(insidevalue!='submit'){
            // $('#'+mnid).after(gen_vform_title(generateid,insidevalue));
            $('#'+mnid).after('<div class="vform-group" data-batchid="'+generateid+'" data-type="'+insidevalue+'" id="vform-group'+generateid+'">'+insidedata+'</div>');
            if(insidevalue=='multiplechoice'){
                $('#vform-group'+generateid+' [type="radio"]').attr('name','multiplechoice[]');
            }
          }

          generateid++;
        });
        // clone
        
        var gropudel = true;
         // delete
        $('#vform-mainfields').delegate(" .vform-group .sc-Remove", "click", function(){
          var a = confirm('Are You Sure!');
          if(a){
            var mnid = $(this).parents(".vform-group").attr('id');
            $('#'+mnid).remove();
            gropudel = false;
            submitcount = 0;
            $('[data-fieldtype="submit"]').removeClass('vform-fielddisabled');
            $('#rightPanel').css('right','-560px');
          }

        });
        // delete

        // click properties
        $('#vform-mainfields').delegate(".vform-group", "click", function(){

          $('.vform-group').each(function(){
            $(this).removeClass('vform-group-active');
          });
          $(this).addClass('vform-group-active');
      
          if(gropudel!=false){
            $('#rightPanel').css('right','0px');
            
            
            var thid = $(this).attr('id');
            var batchid = $(this).data('batchid');
      
             $('.showmyclickpropty').text($('#'+thid).data('type')+' Properties');
           
             $('.perticularvfmids').show();
              $('.perticularvfmids').text('#'+batchid);
      
              $('.vform-standardfields').hide();
              $('.vform-fieldoptions').show();
              $('.vform-shift1').removeClass('vform-fieldactive');
              $('.vform-shift2').addClass('vform-fieldactive');
              $('.advancedoptionfield').show();
              $('.standardoptionfield').show();
      
              $('[name="fieldoptionid"]').val(thid);
              $('[name="fieldoptionid"]').attr('data-batchid',batchid);
      
      
              var thvl1 = $('#'+thid+' .vform-heading .text').text();
              $('[name="optionname"]').val(thvl1);
      
              var thvl2 = $('#'+thid+' .vform-description').text();
              $('[name="optiondescription"]').val(thvl2);
      
              var thvl3 = $('#'+thid+' input').attr('placeholder');
              $('[name="optionplaceholder"]').val(thvl3);
      
              var thvl4 = $('#'+thid).hasClass('nolabel');
              if(thvl4){
                $('[name="optionhidelabel"]').prop('checked', true);
              }else{
                $('[name="optionhidelabel"]').prop('checked', false);
              }
      
              var thvl5 = $('#'+thid).hasClass('vform-required');
              if(thvl5){
                $('[name="optionrequired"]').prop('checked', true);
              }else{
                $('[name="optionrequired"]').prop('checked', false);
              }
      
              var thvl6 = $('#'+thid).hasClass('size-small');
              var thvl7 = $('#'+thid).hasClass('size-medium');
              var thvl8 = $('#'+thid).hasClass('size-large');
      
              if(thvl6){
                $('[name="adfieldsize"]').val("small");
              }else if(thvl7){
                $('[name="adfieldsize"]').val("medium");
              }else if(thvl8){
                $('[name="adfieldsize"]').val("large");
              }else{
                $('[name="adfieldsize"]').val("large");
              }
      
              var thvl9 = $('#'+thid+' .primary-input').val();
              $('[name="optiondefaultvalue"]').val(thvl9);

              $('[name="optionrequired"]').show();

              var datatype = $(this).data('type');

              var classval = '';
               classval = $('#'+thid+' input').attr('class');
              if(classval==undefined){

                if(datatype=='dropdown' || datatype=='month' || datatype=='week'){
                  classval = $('#'+thid+' select').attr('class');
                }else if(datatype=='paragraph'){
                  classval = $('#'+thid+' textarea').attr('class');
                }else if(datatype=='multiplechoice'){
                  classval = $('#'+thid+' ul').attr('class');
                }

              }
              
              if(classval!=undefined){
                var splclass = classval.split('primary-input');
                $('.addclassvalue').text(splclass[1]);
              }
      
              if(datatype=='name'){
                $('.vform-format-sf').show();
                $('.vform-allname-ao').show();
                $('.vform-placeholder-ao').hide();
                $('.vform-dropdown-sf').hide();
                $('.vform-defaultvalue-ao').hide();
                $('.vform-multichoice-sf').hide();
                $('.vform-checkbox-sf').hide();
                $('.standardoptionfield .inline').text('Required');
                $('.standardoptionfield').show();
                $('[name="optionhidelabel"]').show();
                $('.advancedoptionfield .inline').show();
                $('.advancedoptionfield').show();
                $('.vform-address-ao').hide();
                $('.vform-label-sf').show();
                $('.vform-standard-bottom').show();
                $('.vform-divider-inf').hide();
                $('.vform-termscondition-sf').hide();
                $('.vform-link-sf').hide();
                $('.vform-image-sf').hide();
                $('.vform-button-sf').hide();
      
              }else if(datatype=='dropdown'){
                var thsid =  $(this).attr('id');
                $('.vform-dropdown-value').html('');
                $('#'+thsid+' select option').each(function(){
                  vl = $(this).text();
                  $('.vform-dropdown-value').append('<div>'+vl+'<i class="fa fa-times thisparemove" aria-hidden="true"></i></div>');
                });
                $('.vform-dropdown-sf').show();
                $('.vform-format-sf').hide();
                $('.vform-checkbox-sf').hide();
                $('.vform-multichoice-sf').hide();
                $('.vform-allname-ao').hide();
                $('.standardoptionfield .inline').text('Required');
                $('.standardoptionfield').show();
                $('[name="optionhidelabel"]').show();
                $('.advancedoptionfield .inline').show();
                $('.advancedoptionfield').show();
                $('.vform-address-ao').hide();
                $('.vform-label-sf').show();
                $('.vform-standard-bottom').show();
                $('.vform-divider-inf').hide();
                $('.vform-termscondition-sf').hide();
                $('.vform-link-sf').hide();
                $('.vform-image-sf').hide();
                $('.vform-button-sf').hide();
                $('.vform-defaultvalue-ao').hide();
                $('.vform-placeholder-ao').hide();

      
              }else if(datatype=='multiplechoice'){
                var thsid =  $(this).attr('id');
                $('.vform-multichoice-value').html('');
                $('#'+thsid+' .vform-multiplechoice ul li input').each(function(){
                  vl = $(this).attr('value');
                  $('.vform-multichoice-value').append('<div>'+vl+'<i class="fa fa-times thismultimove" aria-hidden="true"></i></div>');
                });
                $('.vform-multichoice-sf').show();
                $('.vform-checkbox-sf').hide();
                $('.vform-dropdown-sf').hide();
                $('.vform-allname-ao').hide();
                  $('.standardoptionfield .inline').text('Required');
                  $('.standardoptionfield').show();
                  $('[name="optionhidelabel"]').show();
                  $('.advancedoptionfield .inline').show();
                $('.advancedoptionfield').show();
                $('.vform-address-ao').hide();
                $('.vform-label-sf').show();
                $('.vform-standard-bottom').show();
                $('.vform-divider-inf').hide();
                $('.vform-termscondition-sf').hide();
                $('.vform-link-sf').hide();
                $('.vform-image-sf').hide();
                $('.vform-button-sf').hide();
                $('.vform-placeholder-ao').hide();

      
              }else if(datatype=='Checkboxes'){
                var thsid =  $(this).attr('id');
                $('.vform-multichoice-value').html('');
                $('#'+thsid+' .vform-checkbox ul li input').each(function(){
                  vl = $(this).attr('value');
                  $('.vform-multichoice-value').append('<div>'+vl+'<i class="fa fa-times thischeckbox" aria-hidden="true"></i></div>');
                });
                $('.vform-checkbox-sf').show();
                $('.vform-dropdown-sf').hide();
                $('.vform-multichoice-sf').hide();
                $('.vform-allname-ao').hide();
                $('.standardoptionfield .inline').html('Required <span style="color: red;margin-left: 5px;">!Only First Option Are Required.</span>');
                $('.standardoptionfield').show();
                $('[name="optionhidelabel"]').show();
                $('.advancedoptionfield .inline').show();
                $('.advancedoptionfield').show();
                $('.vform-address-ao').hide();
                $('.vform-label-sf').show();
                $('.vform-standard-bottom').show();
                $('.vform-divider-inf').hide();
                $('.vform-termscondition-sf').hide();
                $('.vform-link-sf').hide();
                $('.vform-image-sf').hide();
                $('.vform-button-sf').hide();
                $('.vform-placeholder-ao').hide();
      
              }else if(datatype=='submit'){
                $('.standardoptionfield').hide();
                $('.vform-placeholder-ao').hide();
                $('[name="optionhidelabel"]').hide();
                $('.advancedoptionfield .inline').hide();
                $('.vform-defaultvalue-ao').show();
                $('.advancedoptionfield').show();
                $('.vform-address-ao').hide();
                $('.vform-label-sf').show();
                $('.vform-standard-bottom').show();
                $('.vform-divider-inf').hide();
                $('.vform-termscondition-sf').hide();
                $('.vform-link-sf').hide();
                $('.vform-image-sf').hide();
                $('.vform-button-sf').hide();
      
              }else if(datatype=='address'){
                $('.vform-defaultvalue-ao').hide();
                $('.vform-placeholder-ao').hide();
                $('.vform-address-ao').show();
                
                $('.vform-dropdown-sf').hide();
                $('.vform-multichoice-sf').hide();
                $('.vform-format-sf').hide();
                $('.vform-allname-ao').hide();
                $('.vform-checkbox-sf').hide();
      
                var plc1 = $('#'+thid+' [name="full_address[]"]').attr('placeholder');
                $('[name="userfulladdress"]').val(plc1);
                var vl1 = $('#'+thid+' [name="full_address[]"]').val();
                $('[name="userfulladdressval"]').val(vl1);
                
                var plc2 = $('#'+thid+' [name="city_name[]"]').attr('placeholder');
                $('[name="usercity"]').val(plc2);
                var vl2 = $('#'+thid+' [name="city_name[]"]').val();
                $('[name="usercityval"]').val(vl2);
                
                var plc3 = $('#'+thid+' [name="state_name[]"]').attr('placeholder');
                $('[name="userstate"]').val(plc3);
                var vl3 = $('#'+thid+' [name="state_name[]"]').val();
                $('[name="userstateval"]').val(vl3);
      
                var plc4 = $('#'+thid+' [name="zip_code[]"]').attr('placeholder');
                $('[name="userzip"]').val(plc4);
                var vl4 = $('#'+thid+' [name="zip_code[]"]').val();
                $('[name="userzipval"]').val(vl4);
                $('.advancedoptionfield').show();
                $('.standardoptionfield').show();
                $('.vform-label-sf').show();
                $('.vform-standard-bottom').show();
                $('.vform-divider-inf').hide();
                $('.vform-termscondition-sf').hide();
                $('.vform-link-sf').hide();
                $('.vform-image-sf').hide();
                $('.vform-button-sf').hide();
      
              }else if(datatype=='pagebreak'){
                $('.standardoptionfield').hide();
                $('.advancedoptionfield').hide();
              }else if(datatype=='divider'){
                $('.advancedoptionfield').hide();
                $('.vform-label-sf').hide();
                $('.vform-standard-bottom').hide();
                $('.vform-divider-inf').show();
      
                var divr1 = $('#'+thid+' hr').css('width');
                $('[name="dividerwidth"]').val(divr1);
      
                var divr2 = $('#'+thid+' hr').css('background');
                $('[name="dividercolor"]').val(divr2);
      
                var divr3 = $('#'+thid+' hr').css('height');
                $('[name="dividerheight"]').val(divr3);
      
                var divr4 = $('#'+thid+' hr').css('radius');
                $('[name="dividerradius"]').val(divr4);
                $('.vform-termscondition-sf').hide();
                $('.vform-link-sf').hide();
                $('.vform-image-sf').hide();
                $('.vform-button-sf').hide();
      
              }else if(datatype=='termscondition'){
                 $('.advancedoptionfield').hide();
                $('.vform-label-sf').hide();
                $('.vform-dropdown-sf').hide();
                $('.vform-multichoice-sf').hide();
                $('.vform-checkbox-sf').hide();
                $('.vform-format-sf').hide();
                $('.vform-standard-bottom').hide();
                $('.vform-divider-inf').hide();
      
                var terms1 = $('#'+thid+' .insidetermscondition').text();
                $('[name="termsconditiontext"]').val(terms1);
      
                var terms2 = $('#'+thid+' [name="termscondition[]"]').is(":checked");
                $('input[name="termsconditionalreadycheck"]').prop('checked',terms2);
      
                $('.vform-termscondition-sf').show();
                $('.vform-image-sf').hide();
                $('.vform-link-sf').hide();
                $('.vform-button-sf').hide();
      
              }else if(datatype=='link'){
                $('.advancedoptionfield').hide();
                $('.vform-label-sf').hide();
                $('.vform-dropdown-sf').hide();
                $('.vform-multichoice-sf').hide();
                $('.vform-checkbox-sf').hide();
                $('.vform-format-sf').hide();
                $('.vform-standard-bottom').hide();
                $('.vform-divider-inf').hide();
                $('.vform-termscondition-sf').hide();
                $('.vform-link-sf').show();
      
                var link1 = $('#'+thid+' .insideclick').attr("target");
                if(link1=='_blank'){
                  $('[name="linktarget"]').prop('checked',true);
                  }else{
                  $('[name="linktarget"]').prop('checked',false);
                }
      
                var link2 = $('#'+thid+' .insideclick').css("text-decoration");
                //  console.log(link2);
                if(link2.split(' ')[0]=='none'){
                  $('[name="linkunderline"]').prop('checked',true);
                  }else{
                    $('[name="linkunderline"]').prop('checked',false);
                  }
                
                var link3 = $('#'+thid+' .insideclick').css("text-transform");
                $('select[name="linktransform"] option').each(function(){
                  $(this).removeAttr('selected');
                });
      
                $('select[name="linktransform"]').val(link3);
      
                var link4 = $('#'+thid+' .insideclick').css("font-size");
                $('[name="linksize"]').val(link4);
      
                var link5 = $('#'+thid+' .insideclick').css("color");
                $('[name="linkcolor"]').val(link5);
      
                var link6 = $('#'+thid+' .insideclick').attr("href");
                $('[name="linklink"]').val(link6);
                $('.vform-image-sf').hide();
                $('.vform-button-sf').hide();

                var txtvl = $('#'+thid+' a').html();
              $('[name="vfanchortext"]').val(txtvl);
      
      
              }else if(datatype=='image'){
                $('.advancedoptionfield').hide();
                $('.vform-label-sf').hide();
                $('.vform-dropdown-sf').hide();
                $('.vform-multichoice-sf').hide();
                $('.vform-checkbox-sf').hide();
                $('.vform-format-sf').hide();
                $('.vform-standard-bottom').hide();
                $('.vform-divider-inf').hide();
                $('.vform-termscondition-sf').hide();
                $('.vform-link-sf').hide();
                $('.vform-image-sf').show();
      
                var im1 = $('#'+thid+' .vfinsideimage').attr("src");
                $('[name="vfinsideimage"]').val(im1);
      
                var im2 = $('#'+thid+' .vfinsideimage').css("width");
                console.log(im2);
                $('[name="vfinsidewidth"]').val(im2);
                $('.vform-button-sf').hide();
      
              }else if(datatype=='month'){
      
                  $('.vform-dropdown-sf').hide();
                  $('.vform-multichoice-sf').hide();
                  $('.vform-format-sf').hide();
                  $('.vform-allname-ao').hide();
                  $('.vform-checkbox-sf').hide();
                  $('.vform-placeholder-ao').hide();
                  $('.vform-defaultvalue-ao').hide();
                  $('.vform-address-ao').hide();
                  $('.standardoptionfield').show();
                  $('.advancedoptionfield').show();
                  $('.vform-label-sf').show();
                  $('.vform-standard-bottom').show();
                  $('.vform-termscondition-sf').hide();
                $('.vform-link-sf').hide();
                $('.vform-divider-inf').hide();
                $('.vform-image-sf').hide();
                $('.vform-button-sf').hide();
      
              }else if(datatype=='week'){
      
                  $('.vform-dropdown-sf').hide();
                  $('.vform-multichoice-sf').hide();
                  $('.vform-format-sf').hide();
                  $('.vform-allname-ao').hide();
                  $('.vform-checkbox-sf').hide();
                  $('.vform-placeholder-ao').hide();
                  $('.vform-defaultvalue-ao').hide();
                  $('.vform-address-ao').hide();
                  $('.standardoptionfield').show();
                  $('.advancedoptionfield').show();
                  $('.vform-label-sf').show();
                  $('.vform-standard-bottom').show();
                  $('.vform-termscondition-sf').hide();
                $('.vform-link-sf').hide();
                $('.vform-divider-inf').hide();
                $('.vform-image-sf').hide();
                $('.vform-button-sf').hide();
      
      
              }else if(datatype=='button'){
                $('.advancedoptionfield').hide();
               $('.vform-image-sf').hide();
               $('.vform-link-sf').hide();
               $('.vform-termscondition-sf').hide();
               $('.vform-divider-inf').hide();
               $('.vform-label-sf').hide();
               $('.vform-dropdown-sf').hide();
               $('.vform-multichoice-sf').hide();
               $('.vform-checkbox-sf').hide();
               $('.vform-format-sf').hide();
               $('.vform-standard-bottom').hide();
      
               var link1 = $('#'+thid+' .vfinsidebtn').attr("target");
               if(link1=='_blank'){
                 $('[name="vfbtnlinktarget"]').prop('checked',true);
                 }else{
                 $('[name="vfbtnlinktarget"]').prop('checked',false);
               }
      
                 var link2 = $('#'+thid+' .vfinsidebtn').css("text-transform");
                $('select[name="vfbtnlinktransform"] option').each(function(){
                  $(this).removeAttr('selected');
                });
      
                $('select[name="vfbtnlinktransform"]').val(link2);
      
      
               var link3 = $('#'+thid+' .vfinsidebtn').css("font-size");
               $('[name="vfbtnfontsize"]').val(link3);
      
               var link4 = $('#'+thid+' .vfinsidebtn').css("background-color");
               $('[name="vfbtnbkcolor"]').val(link4);
      
               var link5 = $('#'+thid+' .vfinsidebtn').css("color");
               $('[name="vfbtnlinkcolor"]').val(link5);
      
               var link6 = $('#'+thid+' .vfinsidebtn').attr("href");
               $('[name="vfbtnlinklink"]').val(link6);
      
               var link7 = $('#'+thid+' .vfinsidebtn').css("padding");
               $('[name="vfbtnpadding"]').val(link7);
      
               $('.vform-button-sf').show();

               var txtvl = $('#'+thid+' a').html();
              $('[name="vfbtntext"]').val(txtvl);
      
      
              }else{

                $('.vform-dropdown-sf').hide();
                $('.vform-multichoice-sf').hide();
                $('.vform-format-sf').hide();
                $('.vform-allname-ao').hide();
                $('.vform-checkbox-sf').hide();
                $('.vform-placeholder-ao').show();
                $('.vform-defaultvalue-ao').show();
                $('.standardoptionfield .inline').text('Required');
                $('.vform-address-ao').hide();
                $('.standardoptionfield').show();
                $('.advancedoptionfield').show();
                $('.vform-label-sf').show();
                $('.vform-standard-bottom').show();
                $('.vform-termscondition-sf').hide();
                $('.vform-link-sf').hide();
                $('.vform-divider-inf').hide();
                $('.vform-image-sf').hide();
                $('.vform-button-sf').hide();

                if(datatype=='heading' || datatype=='title'){
                  $('.advancedoptionfield').hide();
                  $('.standardoptionfield .inline').text('');
                  $('[name="optionrequired"]').hide();
                }else{
                  $('.advancedoptionfield').show();
                  $('[name="optionrequired"]').show();
                }

                if(datatype=='date' || datatype=='time' || datatype=='color'){
                  $('.vform-placeholder-ao').hide();
                }
                
              }
      
      
      
          }else{
      
            $('.vform-shift2').removeClass('vform-fieldactive');
            $('.vform-shift1').addClass('vform-fieldactive');
            $('.vform-standardfields').show();
            $('.vform-fieldoptions').hide();
            gropudel = true;
          }
      
      
        });
        // click properties

        $('[name="optionname"]').keyup(function(){
          var mainid = $('[name="fieldoptionid"]').val();
          var thvl = $(this).val();
          $('#'+mainid+' .vform-heading .text').text(thvl);
        });

        $('[name="optiondescription"]').keyup(function(){
          var mainid = $('[name="fieldoptionid"]').val();
          var thvl = $(this).val();
          $('#'+mainid+' .vform-description').text(thvl);
        });

        $('[name="optionplaceholder"]').keyup(function(){
          var mainid = $('[name="fieldoptionid"]').val();
          var thvl = $(this).val();
          $('#'+mainid+' input').attr('placeholder',thvl);
        });

        $('[name="optionhidelabel"]').click(function(){
          var mainid = $('[name="fieldoptionid"]').val();
          var thvl = $(this).val();
          var chk = $(this).is(":checked");
          if(chk){
            $('#'+mainid).addClass('nolabel');
          }else{
            $('#'+mainid).removeClass('nolabel');
          }
        });

        $('[name="optionrequired"]').click(function(){
          var mainid = $('[name="fieldoptionid"]').val();
          var thvl = $(this).val();
          var chk = $(this).is(":checked");
          var dttype = $('#'+mainid).data('type');
          if(chk){
            $('#'+mainid).addClass('vform-required');
            if(dttype!='multiplechoice' && dttype!='Checkboxes' && dttype!='name'){
              $('#'+mainid+' input').attr('required','true');
              $('#'+mainid+' textarea').attr('required','true');
              $('#'+mainid+' select').attr('required','true');
            }else if(dttype=='multiplechoice'){
              $('#'+mainid+' input').eq('0').attr('required','true');
            }else if(dttype=='Checkboxes'){
              $('#'+mainid+' input').eq('0').attr('required','true');
            }else if(dttype=='name'){
              $('#'+mainid+' input').eq('0').attr('required','true');
            }

          }else{
            $('#'+mainid).removeClass('vform-required');
            $('#'+mainid+' input').removeAttr('required');
            $('#'+mainid+' textarea').removeAttr('required');
            $('#'+mainid+' select').removeAttr('required');
          }
        });

        $('[name="adfieldsize"]').change(function() {
          var mainid = $('[name="fieldoptionid"]').val();
          var thvl = $(this).val();
          if(thvl == 'small'){
            $('#'+mainid).addClass('size-small');
            $('#'+mainid).removeClass('size-medium');
            $('#'+mainid).removeClass('size-large');
          }else if(thvl == 'medium'){
            $('#'+mainid).addClass('size-medium');
            $('#'+mainid).removeClass('size-smail');
            $('#'+mainid).removeClass('size-large');
          }else if(thvl == 'large'){
            $('#'+mainid).addClass('size-large');
            $('#'+mainid).removeClass('size-medium');
            $('#'+mainid).removeClass('size-small');
          }

        });

        $('[name="optiondefaultvalue"]').keyup(function(){
          var mainid = $('[name="fieldoptionid"]').val();
          var thvl = $(this).val();
          $('#'+mainid+' input').attr('value',thvl);
        });

        $('[name="vfbtntext"]').keyup(function(){
          var mainid = $('[name="fieldoptionid"]').val();
          var thvl = $(this).val();
          $('#'+mainid+' a').html(thvl);
        });

        $('[name="vfanchortext"]').keyup(function(){
          var mainid = $('[name="fieldoptionid"]').val();
          var thvl = $(this).val();
          $('#'+mainid+' a').html(thvl);
        });

        

        $('[name="adfieldformat"]').change(function() {
          var mainid = $('[name="fieldoptionid"]').val();
          var thvl = $(this).val();
          if(thvl == 'simple'){
            $('#'+mainid).addClass('format-selected-simple');
            $('#'+mainid).removeClass('format-selected-first-last');
            $('#'+mainid).removeClass('format-selected-combo-middle-last');
            $('.vform-ao-middle').hide();
            $('.vform-ao-last').hide();

          }else if(thvl == 'firstlast'){
            $('#'+mainid).addClass('format-selected-first-last');
            $('#'+mainid).removeClass('format-selected-simple');
            $('#'+mainid).removeClass('format-selected-combo-middle-last');

          }else if(thvl == 'firstmiddlelast'){
            $('#'+mainid).removeClass('format-selected-simple');
            $('#'+mainid).removeClass('format-selected-first-last');
            $('#'+mainid).removeClass('format-selected-combo-middle-last');

          }else if(thvl == 'combomiddlelast'){
            $('#'+mainid).addClass('format-selected-combo-middle-last');
            $('#'+mainid).removeClass('format-selected-simple');
            $('#'+mainid).removeClass('format-selected-first-last');

          }

        });
        
        // For adding classes
        $('.addclassoption').click(function(){
          var mainid = $('[name="fieldoptionid"]').val();
          var thvl = $('[name="optionclasses"]').val();

          var thsdt =  $('#'+mainid).data('type');
          switch (thsdt) {
            case 'dropdown':
              $('#'+mainid+' select').addClass(thvl);
              break;
              case 'paragraph':
                $('#'+mainid+' textarea').addClass(thvl);
              break;
              case 'multiplechoice':
              $('#'+mainid+' ul').addClass(thvl);
              break;
              case 'month':
              $('#'+mainid+' select').addClass(thvl);
              break;
              case 'week':
              $('#'+mainid+' select').addClass(thvl);
              break;
            default:
              $('#'+mainid+' input').addClass(thvl);
          }

          $('[name="optionclasses"]').val('');
          var addcls = $('.addclassvalue').text();
          $('.addclassvalue').text(addcls+' '+thvl);

        });

        // remove classes
        $('.removeclassoption').click(function(){
          var mainid = $('[name="fieldoptionid"]').val();
          var thvl = $('.addclassvalue').text();

          var thsdt = $('#'+mainid).data('type');

          switch (thsdt) {
            case 'dropdown':
                $('#'+mainid+' select').removeClass(thvl);
              break;
              case 'paragraph':
                $('#'+mainid+' textarea').removeClass(thvl);
              break;
              case 'multiplechoice':
              $('#'+mainid+' ul').removeClass(thvl);
              break;
              case 'month':
                $('#'+mainid+' select').removeClass(thvl);
              break;
              case 'week':
                $('#'+mainid+' select').removeClass(thvl);
              break;
            default:
              $('#'+mainid+' input').removeClass(thvl);
          }

          $('.addclassvalue').text('');


        });

        // firstname
        $('[name="userfrstname"]').keyup(function(){
          var mainid = $('[name="fieldoptionid"]').val();
          var thvl = $(this).val();
          $('#'+mainid+' .vform-first-name input').attr('placeholder',thvl);
        });

        $('[name="userfrstnamedfval"]').keyup(function(){
          var mainid = $('[name="fieldoptionid"]').val();
          var thvl = $(this).val();
          $('#'+mainid+' .vform-first-name input').attr('value',thvl);
        });

        // usermiddlename
        $('[name="usermiddlename"]').keyup(function(){
          var mainid = $('[name="fieldoptionid"]').val();
          var thvl = $(this).val();
          $('#'+mainid+' .vform-middle-name input').attr('placeholder',thvl);
        });

        $('[name="usermiddlenamedfval"]').keyup(function(){
          var mainid = $('[name="fieldoptionid"]').val();
          var thvl = $(this).val();
          $('#'+mainid+' .vform-middle-name input').attr('value',thvl);
        });

        // userlastname

        $('[name="userlastnam"]').keyup(function(){
          var mainid = $('[name="fieldoptionid"]').val();
          var thvl = $(this).val();
          $('#'+mainid+' .vform-last-name input').attr('placeholder',thvl);
        });

        $('[name="userlastnamdfval"]').keyup(function(){
          var mainid = $('[name="fieldoptionid"]').val();
          var thvl = $(this).val();
          $('#'+mainid+' .vform-last-name input').attr('value',thvl);
        });

        // Dropdown
        $('.dropidown').click(function(){
          var mainid = $('[name="fieldoptionid"]').val();
          var thvl = $(this).val();
          var vl = $('.vform-choice-dropdown input').val();
          if(vl!=''){
            $('#'+mainid+' .vform-dropdown select').append('<option value="'+vl+'">'+vl+'</option>');
            $('.vform-dropdown-value').append('<div>'+vl+'<i class="fa fa-times thisparemove" aria-hidden="true"></i></div>');
            $('.vform-choice-dropdown input').val('');
          }else{
            alert('Value Must be Filled!');
          }

        });

        $('#vform-main').delegate(".thisparemove", "click", function(){
          var mainid = $('[name="fieldoptionid"]').val();
          var thvl = $(this).parent().text();
          $('#'+mainid+' .vform-dropdown option[value="'+thvl+'"]').remove();
          $('[name="optionrequired"]').prop('checked',false);
          $('#'+mainid).removeClass('vform-required');
          $(this).parent().remove();

        });

        // updown
        $('.vform-sidebar2').delegate(".upsidedown1", "click", function(){
          var mnid = $(this).parents(".vform-group").attr('id');
        var e = $('#'+mnid);
        e.prev().insertAfter(e);
        });

        $('.vform-sidebar2').delegate(".upsidedown2", "click", function(){
          var mnid = $(this).parents(".vform-group").attr('id');
        var e = $('#'+mnid);
        e.next().insertBefore(e);
        });

        // Multiple choice
        $('.multiichoice').click(function(){
          var mainid = $('[name="fieldoptionid"]').val();
          var batchid = $('[name="fieldoptionid"]').data('batchid');
          var thvl = $(this).val();
          var vl = $('.vform-choice-multi input').val();
          if(vl!=''){
            $('#'+mainid+' .vform-multiplechoice ul').append('<li><input type="radio" disabled="" name="multiplechoice[]" value="'+vl+'">'+vl+'</li>');
            $('.vform-multichoice-value').append('<div>'+vl+'<i class="fa fa-times thismultimove" aria-hidden="true"></i></div>');
            $('.vform-choice-multi input').val('');
          }else{
            alert('Value Must be Filled!');
          }
        });

        $('#vform-main').delegate(".thismultimove", "click", function(){
          var mainid = $('[name="fieldoptionid"]').val();
          var thvl = $(this).parent().text();
          $('#'+mainid+' .vform-multiplechoice input[value="'+thvl+'"]').parent().remove();
          $('[name="optionrequired"]').prop('checked',false);
          $('#'+mainid).removeClass('vform-required');
          $(this).parent().remove();

        });

        // Checkboxe choice
        $('.multicheckbox').click(function(){
          var mainid = $('[name="fieldoptionid"]').val();
          var thvl = $(this).val();
          var vl = $('.vform-checkbox-multi input').val();
          if(vl!=''){
            $('#'+mainid+' .vform-checkbox ul').append('<li><input type="checkbox" disabled="" value="'+vl+'">'+vl+'</li>');
            $('.vform-multicheckbox-value').append('<div>'+vl+'<i class="fa fa-times thischeckbox" aria-hidden="true"></i></div>');
            $('.vform-checkbox-multi input').val('');
          }else{
            alert('Value Must be Filled!');
          }

        });

        $('#vform-main').delegate(".thischeckbox", "click", function(){
          var mainid = $('[name="fieldoptionid"]').val();
          var thvl = $(this).parent().text();
          $('#'+mainid+' .vform-checkbox input[value="'+thvl+'"]').parent().remove();
          $('[name="optionrequired"]').prop('checked',false);
          $('#'+mainid).removeClass('vform-required');
          $(this).parent().remove();

        });

        // Fulladdress
        $('input[name="userfulladdress"]').on('keyup',function(){
          var tid = $('input[name="fieldoptionid"]').val();
          var vl = $(this).val();
          $('#'+tid+' [name="full_address[]"]').attr('placeholder',vl);
        });

        $('input[name="userfulladdressval"]').on('keyup',function(){
          var tid = $('input[name="fieldoptionid"]').val();
          var vl = $(this).val();
          $('#'+tid+' [name="full_address[]"]').val(vl);
        });
        // Fulladdress

        // city
        $('input[name="usercity"]').on('keyup',function(){
          var tid = $('input[name="fieldoptionid"]').val();
          var vl = $(this).val();
          $('#'+tid+' [name="city_name[]"]').attr('placeholder',vl);
        });

        $('input[name="usercityval"]').on('keyup',function(){
          var tid = $('input[name="fieldoptionid"]').val();
          var vl = $(this).val();
          $('#'+tid+' [name="city_name[]"]').val(vl);
        });
        // city

        // state
        $('input[name="userstate"]').on('keyup',function(){
          var tid = $('input[name="fieldoptionid"]').val();
          var vl = $(this).val();
          $('#'+tid+' [name="state_name[]"]').attr('placeholder',vl);
        });

        $('input[name="userstateval"]').on('keyup',function(){
          var tid = $('input[name="fieldoptionid"]').val();
          var vl = $(this).val();
          $('#'+tid+' [name="state_name[]"]').val(vl);
        });
        // state

        // zip
        $('input[name="userzip"]').on('keyup',function(){
          var tid = $('input[name="fieldoptionid"]').val();
          var vl = $(this).val();
          $('#'+tid+' [name="zip_code[]"]').attr('placeholder',vl);
        });

        $('input[name="userzipval"]').on('keyup',function(){
          var tid = $('input[name="fieldoptionid"]').val();
          var vl = $(this).val();
          $('#'+tid+' [name="zip_code[]"]').val(vl);
        });
        // zip

        $('input[name="dividerwidth"]').on('keyup',function(){
          var tid = $('input[name="fieldoptionid"]').val();
          var vl = $(this).val();
          $('#'+tid+' hr').css('width',vl);
        });

        $('input[name="dividercolor"]').on('keyup',function(){
          var tid = $('input[name="fieldoptionid"]').val();
          var vl = $(this).val();
          $('#'+tid+' hr').css('background',vl);
        });

        $('input[name="dividerheight"]').on('keyup',function(){
          var tid = $('input[name="fieldoptionid"]').val();
          var vl = $(this).val();
          $('#'+tid+' hr').css('height',vl);
        });

        $('input[name="dividerradius"]').on('keyup',function(){
          var tid = $('input[name="fieldoptionid"]').val();
          var vl = $(this).val();
          $('#'+tid+' hr').css('border-radius',vl);
        });

        $('input[name="termsconditiontext"]').on('keyup',function(){
          var tid = $('input[name="fieldoptionid"]').val();
          var vl = $(this).val();
          $('#'+tid+' .insidetermscondition').text(vl);
        });

        $('input[name="termsconditionalreadycheck"]').on('click',function(){
          var tid = $('input[name="fieldoptionid"]').val();
          var vl = $(this).is(":checked");
          $('#'+tid+' [name="termscondition[]"]').prop('checked',vl);
        });

        $('input[name="linktarget"]').on('click',function(){
          var tid = $('input[name="fieldoptionid"]').val();
          var vl = $(this).is(":checked");
          if(vl==true){
            $('#'+tid+' .insideclick').attr('target',"_blank");
          }else{
            $('#'+tid+' .insideclick').attr('target',"_self");
          }
        });

        $('input[name="linkunderline"]').on('click',function(){
          var tid = $('input[name="fieldoptionid"]').val();
          var vl = $(this).is(":checked");
          if(vl==true){
            $('#'+tid+' .insideclick').css('text-decoration',"none");
          }else{
            $('#'+tid+' .insideclick').css('text-decoration',"underline");
          }
        });

        $('select[name="linktransform"]').change(function(){
          var frmname = $(this).val();
          var tid = $('input[name="fieldoptionid"]').val();
          $('#'+tid+' .insideclick').css('text-transform',frmname);
        });

        $('input[name="linkcolor"]').on('keyup',function(){
          var tid = $('input[name="fieldoptionid"]').val();
          var vl = $(this).val();
          $('#'+tid+' .insideclick').css('color',vl);
        });

        $('input[name="linklink"]').on('keyup',function(){
          var tid = $('input[name="fieldoptionid"]').val();
          var vl = $(this).val();
          $('#'+tid+' .insideclick').attr('href',vl);
        });

        $('input[name="linksize"]').on('keyup',function(){
          var tid = $('input[name="fieldoptionid"]').val();
          var vl = $(this).val();
          $('#'+tid+' .insideclick').css('font-size',vl);
        });

        $('input[name="vfinsideimage"]').change(function(){
          var frmname = $(this).val();
          var tid = $('input[name="fieldoptionid"]').val();
          $('#'+tid+' .vfinsideimage').attr('src',frmname);
        });

        $('input[name="vfinsidewidth"]').change(function(){
          var frmname = $(this).val();
          var tid = $('input[name="fieldoptionid"]').val();
          $('#'+tid+' .vfinsideimage').css('width',frmname);
        });

        $('input[name="vfbtnlinktarget"]').on('click',function(){
          var tid = $('input[name="fieldoptionid"]').val();
          var vl = $(this).is(":checked");
          if(vl==true){
            $('#'+tid+' .vfinsidebtn').attr('target',"_blank");
          }else{
            $('#'+tid+' .vfinsidebtn').attr('target',"_self");
          }
        });

        $('select[name="vfbtnlinktransform"]').change(function(){
          var frmname = $(this).val();
          var tid = $('input[name="fieldoptionid"]').val();
          $('#'+tid+' .vfinsidebtn').css('text-transform',frmname);
        });

        $('input[name="vfbtnfontsize"]').on('keyup',function(){
          var tid = $('input[name="fieldoptionid"]').val();
          var vl = $(this).val();
          $('#'+tid+' .vfinsidebtn').css('font-size',vl);
        });

        $('input[name="vfbtnbkcolor"]').on('keyup',function(){
          var tid = $('input[name="fieldoptionid"]').val();
          var vl = $(this).val();
          $('#'+tid+' .vfinsidebtn').css('background-color',vl);
        });

        $('input[name="vfbtnlinkcolor"]').on('keyup',function(){
          var tid = $('input[name="fieldoptionid"]').val();
          var vl = $(this).val();
          $('#'+tid+' .vfinsidebtn').css('color',vl);
        });

        $('input[name="vfbtnlinklink"]').on('keyup',function(){
          var tid = $('input[name="fieldoptionid"]').val();
          var vl = $(this).val();
          $('#'+tid+' .vfinsidebtn').attr('href',vl);
        });

        $('input[name="vfbtnpadding"]').on('keyup',function(){
          var tid = $('input[name="fieldoptionid"]').val();
          var vl = $(this).val();
          $('#'+tid+' .vfinsidebtn').css('padding',vl);
        });

        $('.toggle-smart-tag-display').click(function(){
          var th = $(this).data('fields');
            $('.smart-tags-list-display').each(function(){
              var th2 = $(this).data('fields');
              if(th==th2){
                $(this).toggle();
              }
            });
        });

        $('.vform-notifications-general').delegate(".clickmergevform", "click", function(){
            var thfield = $(this).data('field');
            var prid = $(this).parent().parent().parent().attr('id');
            // console.log(prid);
            if(prid=='vform-panel-field-notifications-1-message-wrap'){
              var gtvl = $('#'+prid+' textarea').val();
              $('#'+prid+' textarea').val(gtvl+' '+thfield);
            }else{
              var gtvl = $('#'+prid+' input[type="text"]').val();
              $('#'+prid+' input[type="text"]').val(gtvl+' '+thfield);
            }
        });
        
        $('#vform-panel-field-confirmations-1-type').change(function(){
          var vl = $(this).val();
          // console.log(vl);
          switch (vl) {
            case 'message':
                $('#vform-panel-field1').show();
                $('#vform-panel-field2').hide();
                $('#vform-panel-field3').hide();
              break;
            case 'page':
            $('#vform-panel-field1').hide();
            $('#vform-panel-field2').show();
            $('#vform-panel-field3').hide();
              break;
            case 'redirect':
            $('#vform-panel-field1').hide();
            $('#vform-panel-field2').hide();
            $('#vform-panel-field3').show();
              break;
            default:
  
          }
      });

      $('.vfsettingslink').click(function(){
        var dtid = $(this).data('id');
        $('.modules-contentvf').hide();
        $('.modules-contentvf[data-id="'+dtid+'"]').show();

        $('.vfsettingslink').removeClass('active');
        $(this).addClass('active');
      });


       //form title
        $('.vform-input-title').on('keyup',function(){
          var frmname = $(this).val();
            $('#vform-userform [name="formname"]').val(frmname);
        });

        // form title

        // form description
        $('[name="formdescription"]').on('keyup',function(){
          var frmdescr = $(this).val();
          $('#vform-userform [name="formdescription"]').val(frmdescr);
        });
        // form description

        // notification

        $("#vform-notification_enable").change(function(){
          var selectedinfo1 = $(this).children("option:selected").val();
            $('[name="notification_mode"]').val(selectedinfo1);

            selectedinfo1 == 0 ? $('#notificationstatus').hide() : $('#notificationstatus').show() ;
        });


        $("#formSettingsFormStatus").change(function(){
          var selectedinfo1 = $(this).children("option:selected").val();
            $('[name="formstatus"]').val(selectedinfo1);
        });
        
        $('#vform-panel-field-notifications-1-email').on('keyup',function(){
          var vl = $(this).val();
          $('[name="send_to"]').val(vl);
        });

        $('#vform-panel-field-notifications-1-subject').on('keyup',function(){
          var vl = $(this).val();
          $('[name="email_subject"]').val(vl);
        });

        $('#vform-panel-field-notifications-1-sender_name').on('keyup',function(){
          var vl = $(this).val();
          $('[name="from_name"]').val(vl);
        });

        $('#vform-panel-field-notifications-1-sender_address').on('keyup',function(){
          var vl = $(this).val();
          $('[name="from_email"]').val(vl);
        });

        $('#vform-panel-field-notifications-1-replyto').on('keyup',function(){
          var vl = $(this).val();
          $('[name="reply_to"]').val(vl);
        });

        $('#vform-panel-field-notifications-1-message').on('keyup',function(){
          var vl = $(this).val();
          $('[name="message"]').val(vl);
        });


      // save work
      $('#savevfwork').click(function(){

        // var chek1 = $('.vform-input-title').val();
        // if(submitcount!=0){
             
          // if(chek1!=''){

          $('#rightPanel').css('right','-560px');
          $('.vform-group').each(function(){
            $(this).removeClass('vform-group-active');
          });
         
            var frmdata = $('#vform-mainfields').html();
            $('#vform-userform [name="formbody"]').val(frmdata);
            var selectedinfo = $("#vform-panel-field-confirmations-1-type").children("option:selected").val();
            var redirectcheck = $("#vform-panel-field-confirmations-1-page").children("option:selected").val();


            var wherego;
            switch (selectedinfo) {
              case 'message':
      
                try {
                wherego = tinyMCE.activeEditor.getContent();
                }
                catch(err) {
                wherego = jQuery('#vformtextarea').val();
                }
      
                break;
              case 'page':
                  wherego = redirectcheck;
                break;
              case 'redirect':
                  wherego = $("#vform-panel-field-confirmations-1-redirect").val();
                break;
              default:
              try {
              wherego = tinyMCE.activeEditor.getContent();
              }
              catch(err) {
              wherego = jQuery('#vformtextarea').val();
              }
              selectedinfo = 'message';
      
              break;
            }
            
            var frmstatus = $('#vform-userform [name="formstatus"]').val();
            var postdata = "action=myvformsave&param=save_vform&selectedinfo="+selectedinfo+"&wherego="+wherego+"&formstatus="+frmstatus+"&"+jQuery("#vform-userform").serialize();
          
            $(this).addClass('loading-animation');
            jQuery.post(ajax_object,postdata,function(response){
              var data = jQuery.parseJSON(response);
              if(data.status==1){
                // alert('Success');
                $('.btn-save').removeClass('loading-animation');
                $('.btn-save').addClass('loading-done');
                setTimeout(function() {
                  $('.btn-save').removeClass('loading-done');
                }, 1000);

              }else{
                alert('!Oops Something went Wrong.');
              }
            });


          // }else{
          //   alert('Form Name Mandatory!');
          // }

        // }else{
        //   alert("Form cant't submit without a submit button");
        // }

       

      });
      // save work


      // create form

      $('#createmyvform').click(function(){

        var postdata = "action=myvformcreate&param=create_vform";
          
        $(this).text('Creating...');
        jQuery.post(ajax_object,postdata,function(response){
          var data = jQuery.parseJSON(response);
          if(data.status==1){
            $(this).text('Create Form');
            var frmid = data.id;
            window.location.href="admin6817.html?page=vform&amp;id="+frmid;
          }else{
            alert('!Oops Something went Wrong.');
          }
        });

      });
      
      $('.delvform').click(function(){
        var goid = $(this).data('id');
        if(confirm('Are you Sure!')){
            var postdata = "action=myvformdelete&param=save_vform&id="+goid;
            jQuery.post(ajax_object,postdata,function(response){

              var data = jQuery.parseJSON(response);
              if(data.status==1){
                window.location.href="admin4bbe.html?page=vform";

              }else{
                alert('!Oops Something went Wrong.');
              }
            });
          }
      });

      $('.clonevform').click(function(){
        var goid = $(this).data('id');
        if(confirm('Are you want to clone!')){
            var postdata = "action=myvformclone&param=clone_vform&id="+goid;
            jQuery.post(ajax_object,postdata,function(response){

              var data = jQuery.parseJSON(response);
              if(data.status==1){
                window.location.href="admin4bbe.html?page=vform";

              }else{
                alert('!Oops Something went Wrong.');
              }
            });
          }
      });

      $('#sendmyvfrm-eml').click(function(){

        var postdata = "action=myvformsend&param=save_vform";
        jQuery.post(ajax_object,postdata,function(response){
            window.location.reload();
        });
    
    });


      $( ".vform-mainfields-inside" ).sortable();
        
    //end
    });
});
