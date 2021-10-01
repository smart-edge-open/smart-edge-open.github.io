---
layout: page
permalink: /release-notes/
---

<!--{% include formspree.html email="my_name@gmail.com" redirect="/thanks/" name="true" subject="true" %}-->
<h1 class="uk-text-left">Release Notes</h1>
<div class="noteLeft">
    <p>September 30th, 2021</p>
</div>
<div class="noteRight">
    <h3>21.03 Updates</h3>
    <p>We are pleased to announce the first release Intel&reg; Smart Edge Open.</p>
    <p>Built from an OpenNESS foundation and representing more than two years of development, the 21.09 release of Intel&reg; Smart Edge Open introduces several technical improvements including a new Developer Experience Kit and an upgraded experience kit for creating 5G private wireless networks.</p>
    <a class="uk-button uk-button-info uk-button-small uk-margin-small-bottom">Added</a>
    <p>Introduced the Developer Experience Kit</p>
    <p>Intel® Smart Edge Open is shifting to Ubuntu 20.04 LTS as the default OS in order to simplify future OS support. The Developer Experience kit uses Ubuntu 20.04 LTS. Other experience kits will be updated from CentOS to Ubuntu in future releases</p>
    <ul class="uk-margin-small-top">
        <li>Automated deployment process for experience kits, based on the Intel® Edge Software Provisioner (Intel® ESP). (Currently available in the Developer Experience Kit.)</li>
        <li>Developer Experience Release Notes</li>
    </ul>
    <p>5G Private Wireless Experience Kit with Integrated RAN that combines a 5G core, 5G RAN and Intel® Smart Edge Open platform in a single, validated solution, using commercial grade CNFs.</p>
    <ul class="uk-margin-small-top">
        <li>Support for 3rd Generation Intel® Xeon® Scalable Processors (code name Ice Lake)</li>
        <li>Support for Intel® vRAN Dedicated Accelerator ACC100</li>
        <li>Support for Intel® QuickAssist Adapter 8970</li>
        <li>Support for Intel® Ethernet Converged Network Adapter X710-DA4</li>
        <li>CNF support
            <ul>
                <li>DU: L1 verified FlexRAN BBU v20.11</li>
                <li>DU: L2 verified Radisys L2 DU v2.2</li>
                <li>CU: L2/L3 verified Radisys L2/L3 CU v2.2</li>
                <li>UPF, AMF and SMF: verified Radisys 5G Core v2.2</li>
            </ul>
        </li>
        <li>Support for Foxconn Sub6 4x4 RRH
            <ul>
                <li>RPQN-7800, 3.3-3.6GHz with firmware version: v1.0.3q 432</li>
            </ul>
        </li>
    </ul>
    <a class="uk-button uk-button-success uk-button-small uk-margin-small-bottom">Changed</a>
    <ul class="uk-margin-small-top">
        <li>5G On Premises Edge has been re-named to 5G Private Wireless Experience Kit with Integrated RAN</li>
        <li>Calico CNI is the default CNI for Intel® Smart Edge Open.</li>
        <li>All documentation for Intel® Smart Edge Open is now publicly available</li>
    </ul>
    <a class="uk-button uk-button-danger uk-button-small uk-margin-small-bottom">Fixed</a>
    <ul class="uk-margin-small-top">
        <li>Fixed stability and reliability with 5G Private Wireless Experience Kit with Integrated RAN.</li>
    </ul>
    <a class="uk-button uk-button-warning uk-button-small uk-margin-small-bottom">Known Issues</a>
    <ul class="uk-margin-small-top">
        <li>Radisys CU support for multiple SR-IOV virtual functions has not been validated.</li>
    </ul>
</div>
<div class="noteLeft">
    <p>Previous</p>
</div>
<div class="noteRight uk-margin-large-bottom">
    <a href="/ido-specs/openness_releasenotes/" title="Previous release notes">Previous release notes</a>
</div>