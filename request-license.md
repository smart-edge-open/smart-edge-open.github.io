---
layout: page
permalink: /request-license/
description: Please select a topic below related to your inquiry. If you don’t find what you need, fill out the Intel® Smart Edge Open contact form.
---
<link rel="stylesheet" type="text/css" href="{{ "/assets/css/select2.min.css?v=8.5" | relative_url }}">
<script type="text/javascript" src="{{ "/assets/js/jquery.validate.min.js" | relative_url }}"></script>
<script type="text/javascript" src="{{ "/assets/js/select2.min.js" | relative_url }}"></script>
<script type="text/javascript" src="{{ "/assets/js/custom.js" | relative_url }}"></script>
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>
<script type="text/javascript">
  jQuery(document).ready(function(){
	//jQuery('.select-p-c').select2({
	//});
  });
</script>
<script>
var apiURL = '{{ site.apiURL }}';
</script>
<!--{% include formspree.html email="my_name@gmail.com" redirect="/thanks/" name="true" subject="true" %}-->
<h1 class="uk-text-left">Request a License</h1>
<div class="formLeft">
<div class="contact-form-wrap idorequest">
        <form id="requestAccess"  name="requestAccess" method="post" autocomplete="off">
            <div style="overflow:hidden;">
                <div class="colLeft">
                    <label class="validationstar">First Name<span class="star">*</span></label>
                    <input type="text" class="form-control" name="name" id="name" placeholder="Type here" value="" maxlength="100">
                    <small class="error" generated="true" for="name" style="display:none;font-size: 100%; font-weight: 400;"></small>
                </div>
                <div class="colRight">
                    <label class="validationstar">Last Name<span class="star">*</span></label>
                    <input type="text" class="form-control" name="last_name" id="last_name" placeholder="Type here" value="" maxlength="100">
                    <small class="error" generated="true" for="last_name" style="display:none;font-size: 100%; font-weight: 400;"></small>
                </div>
            </div>
            <div>
                <label class="validationstar">Email<span class="star">*</span></label>
                <input type="email" class="form-control" name="email" id="email" placeholder="Type here" value="" maxlength="100">
                <small class="error" generated="true" for="email" style="display:none;font-size: 100%; font-weight: 400;"></small>
            </div>
            <div class="seprateBox">
                <label class="validationstar">Are you an existing member of Intel® Network Builders Ecosystem Partner Program? <span class="star">*</span></label>
                <input class="form-check-input" type="radio" name="existing_member" id="inlineRadio1" value="yes">
				<label class="form-check-label" for="inlineRadio1">Yes</label>
                <input class="form-check-input" type="radio" name="existing_member" id="inlineRadio2" value="no">
				<label class="form-check-label" for="inlineRadio2">No</label>
            </div>
             <div>
             <div class="company_name_div cn-no" style="display: none;">
                <label class="validationstar">What company do you represent?<span class="star">*</span></label>
                <input type="text" class="form-control" name="represet_company_name" id="" placeholder="Type here" value="" maxlength="100">
                <small class="error" generated="true" for="represet_company_name" style="display:none;font-size: 100%; font-weight: 400;"></small>
            </div> 
            </div>
            <div class="company_name_div cn-yes companyDropDown" style="display: none;">
                <label class="validationstar">Company Name<span class="star">*</span></label>
                <select name="companyname" id="companyname" title="" class="form-control iscountryeuropean emptySelect select-p-c select2-hidden-accessible" tabindex="-1" aria-hidden="true">
                </select>
                <small class="error" generated="true" for="companyname" style="display:none;font-size: 100%; font-weight: 400;"></small>
            </div>
            <div>
                <label class="validationstar">Who is your Intel primary contact?<span class="star">*</span></label>
                <input type="text" class="form-control" name="primary_contact" id="primary_contact" placeholder="Type here" value="" maxlength="100">
                <small class="error" generated="true" for="primary_contact" style="display:none;font-size: 100%; font-weight: 400;"></small>
            </div>
            <div>
                <label class="validationstar">Which features of Intel&reg; Smart Edge Open are of interest to you?<span class="star">*</span></label>
                <input type="text" class="form-control" name="interest" id="interest" placeholder="Type here" value="" maxlength="100">
                <small class="error" generated="true" for="interest" style="display:none;font-size: 100%; font-weight: 400;"></small>
            </div>
            <div>
                <label class="validationstar">What are your use cases for Edge?<span class="star">*</span></label>
                <input type="text" class="form-control" name="use_case" id="use_case" placeholder="Type here" value="" maxlength="100">
                <small class="error" generated="true" for="use_case" style="display:none;font-size: 100%; font-weight: 400;"></small>
            </div>
            <div class="seprateBox">
                <label class="validationstar">Do you intend to commercialize with Intel&reg; Smart Edge Open?<span class="star">*</span></label>
                <input class="form-check-input" type="radio" name="commercialize" id="commercializeRadio1" value="yes">
				<label class="form-check-label" for="commercializeRadio1">Yes</label>
                <input class="form-check-input" type="radio" name="commercialize" id="commercializeRadio2" value="no">
				<label class="form-check-label" for="commercializeRadio2">No</label>
                <input class="form-check-input" type="radio" name="commercialize" id="commercializeRadio3" value="not sure">
				<label class="form-check-label" for="commercializeRadio3">Not sure</label>
            </div>
           <!-- <div class="row">		
				<div class="form-group col-sm-12 g-recaptcha" data-sitekey="6Lea6ZIUAAAAAKqluacGwSUrDL0Z_6p0TvA37Se6">
             </div>
              <div class="form-group col-sm-12 captcha-ver-msg" style='color:#e64515;font-size:13px;margin-top:-14px;'></div>	
              </div>-->	
            <!-- <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 iagree">
					<div class="agree_not_european" style="">
						<label class="form-check-label" for="agreecheck" style="font-weight: normal;">By submitting this form, you are confirming you are an adult 18 years or older and you agree to share your personal information with Intel to use for this business request. Intel’s websites and communications are subject to our <a href="https://www.intel.com/content/www/us/en/privacy/intel-privacy-notice.html" rel="nofollow" target="_blank" title="Privacy">Privacy</a> Notice and <a href="http://www.intel.com/content/www/us/en/legal/terms-of-use.html" rel="nofollow" target="_blank" title="Terms of Use">Terms of Use</a>.<br><small class="error" generated="true" for="agreecheck" style="display:none"></small></label>
					</div>
                </div>
			</div> -->	
            <div>	
                <input type="submit" id="sub" name="requestAccess" value="Send Message" title="Send Message" class="uk-button uk-button-primary uk-button-large uk-margin-medium-top contact-btn">
            </div>
        </form>
    </div>
</div>

<div class="formRight">
    <p>Source code for certain* experience kits is available under the terms and conditions of Intel’s “Smart Edge Open license” (the “SEO license”). Experience kit source code is provided “as-is,” free of charge, and at Intel’s sole discretion.</p>
    <p>Access to experience kit source code will be granted within 5 business days of execution (electronic or otherwise) of the SEO license.</p>
    <p>*The Smart Edge Open Developer Experience Kit is available under the Apache 2.0 license.</p>
</div>
