---
layout: page
permalink: /api-documentation/
title: API Documentation
#description: Please select a topic below related to your inquiry. If you don’t find what you need, fill out the Intel® Smart Edge Open contact form.
---
<link rel="stylesheet" type="text/css" href="/swagger-ui-open/swagger-custom.css">
<link rel="stylesheet" type="text/css" href="/swagger-ui-open/swagger-ui.css">
<style>
    .api-col-right.no-icon:after{ display:none;}
</style>
<div class="contentAreaAPI" style="display:none;">
    <div class="api-col-wrap">
        <div class="api-col-left"><h2><a href="/api-documentation/" class="backBtn" style="font-size:16px;"><span>&lt;</span> API Documentation</a></h2></div>
        <div class="api-col-right no-icon">
            <select name="program" id="program" class="form-control">
                <option value="">Select API</option>
                {% for api_nav in site.data.api_documentation %}
                <option value="{{ api_nav.short }}" data-ref="{{ api_nav.url }}">{{ api_nav.title }}</option>
                {% endfor %}
            </select>
        </div>
    </div>
    <!-- API Description -->
    <div class="api-description"></div>
</div>

<section class="inner-page-padding" id="swagger-ui">
    <div id="api-heading">
        <h1 class="uk-article-title blog-title uk-margin-remove-bottom">API Documentation</h1>
        <div class="boxHead boxHeadExplore boxAPI uk-child-width-1-3@m uk-grid-match uk-text-center uk-grid uk-grid-stack" data-uk-grid="">
            <div class="uk-first-column">
                <div class="boxHeadBox uk-card uk-card-default uk-box-shadow-medium uk-card-hover uk-card-body uk-inline border-radius-large border-xlight">
                    <h3 class="uk-card-title">HTTP Rest</h3>
                    <ul>
                        {% for api_nav in site.data.api_documentation %}
                        <li class="fa-angle-right"><a href="{{ api_nav.url }}" title="{{ api_nav.title }}">{{ api_nav.title }}</a></li>
                        {% endfor %}
                    </ul>
                </div>
            </div>
            <div>
                <div class="boxHeadBox uk-card uk-card-default uk-box-shadow-medium uk-card-hover uk-card-body uk-inline border-radius-large border-xlight">
                    <h3 class="uk-card-title">GRPC</h3>
                    <ul>
                        <li class="fa-angle-right"><a href="https://github.com/smart-edge-open/specs/blob/master/schema/pb/ela.proto" target="_blank" title="Edge Lifecycle Management API" rel="nofollow">Edge Lifecycle Management API</a></li>
                        <li class="fa-angle-right"><a href="https://github.com/smart-edge-open/specs/blob/master/schema/pb/eva.proto" target="_blank" title="Edge Virtualization Infrastructure API" rel="nofollow">Edge Virtualization Infrastructure API</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
<div id="swagger-ui-second"></div>

<!--Swagger Api Code Start Here  -->  
<script src="/swagger-ui-open/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
<script src="/swagger-ui-open/swagger-ui-bundle.js"></script>
<script src="/swagger-ui-open/swagger-ui-standalone-preset.js"></script>

<script type="text/javascript">
    var swag_url = "", api_description = ""; swag_url_second = "";
    var apiUrl = new URL(window.location.href);
    apiUrl = apiUrl.searchParams.get("api");
    
    if(apiUrl != null){
        //Selected Box
        $("#program").val(apiUrl);
        //Switch
        switch(apiUrl) {
            case 'eaa':
                swag_url = 'https://raw.githubusercontent.com/smart-edge-open/specs/master/schema/eaa/eaa.swagger.json';
                api_description = "<h1>Edge Application API</h1>";
                api_description += "<p>Edge Application APIs enable developers to build edge compute services capable of taking advantage of tactile applications that respond to the changing user, network or resource scenarios. In addition, these APIs can also be used to port existing public/private cloud applications to the edge based on Intel® Smart Edge Open.</p>";
            break;
            case 'controller':
                swag_url = 'https://raw.githubusercontent.com/smart-edge-open/specs/master/schema/controller/api.swagger.json';
                api_description = "<h1>Controller API</h1>";
                api_description += "<p>Controller APIs enable centralized management of Intel® Smart Edge Open edge nodes, and can be called by a UI frontend or by external orchestrators. The API provides an abstraction layer for an operations admin, enabling them to maintain a list of Intel® Smart Edge Open edge nodes, configure apps, manage policies and DNS, and more.</p>";
            break;
            case 'auth':
                swag_url = 'https://raw.githubusercontent.com/smart-edge-open/specs/master/schema/auth/auth.swagger.json';
                api_description = "<h1>Edge Application Authentication API</h1>";
                api_description += "<p>Edge Application Authentication APIs enable authentication of apps that intend to call Edge Application APIs, by validating the identity of the requesting application and issuing it a valid TLS certificate.</p>";
            break;
            case 'cups':
                swag_url = 'https://raw.githubusercontent.com/smart-edge-open/specs/master/schema/cups/cups.swagger.json';
                api_description = "<h1>Core Network Configuration API</h1>";
                api_description += "<p>Core Network Configuration APIs enable network configuration operations to be performed, such as configuring the traffic policy for the core network to steer traffic towards the edge nodes.</p>";
            break;
            case 'af':
                swag_url = 'https://raw.githubusercontent.com/smart-edge-open/specs/master/schema/af/af.openapi.yaml';
                swag_url_second = 'https://raw.githubusercontent.com/open-ness/specs/master/schema/af/af_pfd.openapi.yaml';
                api_description = "<h1>5G APPLICATION FUNCTION (AF)</h1><p></p>";
            break;
            case 'nef':
                swag_url = 'https://raw.githubusercontent.com/smart-edge-open/specs/master/schema/nef/nef_traffic_influence_openapi.yaml';
                swag_url_second = 'https://raw.githubusercontent.com/open-ness/specs/master/schema/nef/nef_pfd_management_openapi.yaml';
                api_description = "<h1>5G NETWORK EXPOSURE FUNCTION (NEF)</h1><p></p>";
            break;
            case '5goam':
                swag_url = 'https://raw.githubusercontent.com/smart-edge-open/specs/master/schema/5goam/5goam.swagger.yaml';
                api_description = "<h1>5G OAM</h1><p></p>";
            break;
            case 'emco':
                //swag_url = 'https://raw.githubusercontent.com/smart-edge-open/EMCO/main/docs/emco_apis.yaml';
                swag_url = 'https://raw.githubusercontent.com/smart-edge-open/EMCO/main/docs/swagger-specs-for-APIs/emco_apis.yaml';
                api_description = "<h1>EMCO</h1><p></p>";
            break;
        }

        //Load Description
        $(".api-description").html(api_description);
        $(".contentAreaAPI").show();
        //Swagger Call
        if(swag_url != ''){
            window.swaggerUi = SwaggerUIBundle({
                url: swag_url,
                dom_id: '#swagger-ui',
                deepLinking: true,
                validatorUrl: null,  
                presets: [
                    SwaggerUIBundle.presets.apis,
                    SwaggerUIStandalonePreset
                ],
                plugins: [
                    SwaggerUIBundle.plugins.DownloadUrl
                ],
                layout: "StandaloneLayout"
            });
        }
        if(swag_url_second != ''){
            window.swaggerUi = SwaggerUIBundle({
                url: swag_url_second,
                dom_id: '#swagger-ui-second',
                deepLinking: true,
                validatorUrl: null,  
                presets: [
                    SwaggerUIBundle.presets.apis,
                    SwaggerUIStandalonePreset
                ],
                plugins: [
                    SwaggerUIBundle.plugins.DownloadUrl
                ],
                layout: "StandaloneLayout"
            });
        }
    }

    $(function(){
        $('#program').on('change', function(e){
            var program = $(this).val();
            program = $.trim(program);
            if(program != ''){
                window.location.href = $('option:selected', this).attr('data-ref');
            }
        });
    });
</script>
