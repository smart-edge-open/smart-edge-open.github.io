---
layout: page
permalink: /contact/
title: Intel® Smart Edge Open - Contact
description: Please select a topic below related to your inquiry. If you don’t find what you need, fill out the Intel® Smart Edge Open contact form.
---
<script type="text/javascript" src="{{ "/assets/js/jquery.validate.min.js" | relative_url }}"></script>
<script type="text/javascript" src="{{ "/assets/js/custom.js" | relative_url }}"></script>
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>
<h1 class="uk-text-left">Contact</h1>
<script>
var apiURL = '{{ site.apiURL }}';
</script>
<div class="formOuter">
    <div class="formLeft">
        <div class="contact-form-wrap idorequest">
            <form id="contact" name="contact"  method="post" autocomplete="off">
                <div style="overflow:hidden;">
                    <div class="colLeft">
                        <label class="validationstar">First Name<span class="star">*</span></label>
                        <input type="text" class="form-control" name="first_name" id="first_name" placeholder="Type here" value="" maxlength="100">
                        <small class="error" generated="true" for="first_name" style="display:none;font-size: 100%; font-weight: 400;"></small>
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
                <div>
                    <label class="validationstar">Message<span class="star">*</span></label>
                    <textarea rows="10" name="message" id="message"></textarea>
                    <small class="error" generated="true" for="message" style="display:none;font-size: 100%; font-weight: 400;"></small>
                </div>
                <div>	
                    <input type="submit" id="sub" name="requestAccess" value="Send Message" title="Send Message"  class="uk-button uk-button-primary uk-button-large uk-margin-medium-top contact-btn">
                </div>
            </form>
        </div>
    </div>
    <div class="formRight section-featured">
        <div class="verticalText">
            <h2>How can we help?</h2>
            <p>Please select a topic below related to your inquiry. If you don’t find what you need, fill out our contact form.</p>
            <ul class="uk-list uk-list-large uk-margin-medium-top">
                <li>
                    <a class="uk-box-shadow-hover-small" href="/request-license/" title="Request a License">
                        <span class="linkHead">Request a License</span>
                        <span class="linkText">Request for access to our licensed products.</span>
                        <svg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><polyline fill='none' stroke='#0068B5' stroke-width='1.03' points='7 4 13 10 7 16' /></svg>
                    </a>
                </li>
                <li>
                    <a class="uk-box-shadow-hover-small" href="#" title="Get Inspired">
                        <span class="linkHead">Get Inspired</span>
                        <span class="linkText">Discover the solutions Smart Edge Open has  provided.</span>
                        <svg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><polyline fill='none' stroke='#0068B5' stroke-width='1.03' points='7 4 13 10 7 16' /></svg>
                    </a>
                </li>
                <li>
                    <a class="uk-box-shadow-hover-small" href="https://networkbuilders.intel.com/register-under-an-existing-company" target="_blank" title="Become a Partner">
                        <span class="linkHead">Become a Partner</span>
                        <span class="linkText">Join our Partner Program and be featured in our Network Builders Program.</span>
                        <svg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><polyline fill='none' stroke='#0068B5' stroke-width='1.03' points='7 4 13 10 7 16' /></svg>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
