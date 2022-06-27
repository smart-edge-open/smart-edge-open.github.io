---
layout: page
permalink: /release-notes/
---

<!--{% include formspree.html email="my_name@gmail.com" redirect="/thanks/" name="true" subject="true" %}-->
<h1 class="uk-text-left">Release Notes</h1>

<div class="noteLeft">
    <p>May 15th, 2022</p>
</div>


<div class="noteRight">
    <h3>Developer Experience Kit (22.03)</h3>
    <p>The 22.03 release of Intel® Smart Edge Open features an updated Developer Experience Kit.</p>
    <p>This release adds secure key management, management of virtual machines, and options for distributed storage.</p>
    <a class="uk-button uk-button-info uk-button-small uk-margin-small-bottom">Added</a>
    <h3>Secure key management</h3>
    <p>The Key Management Reference Application (KMRA) provides end-to-end protection of customer private keys at runtime by provisioning them into Intel® Software Guard Extensions (Intel® SGX) enclaves.</p>
    <p>The application supports multitenancy by running multiple instances of Intel® SGX enclaves.</p>
    <p>The application also demonstrates how to integrate an Intel® SGX asymmetric key with a hardware security model (HSM) on a centralized key server. The reference application sets up an NGINX workload to access the private key in an Intel® SGX enclave on a 3rd Generation Intel® Xeon® Scalable processor, using the PublicKey Cryptography Standard #11 interface and OpenSSL. It uses Intel® SGX Data Center Attestation Primitives libraries to generate and verify the ECDSA-signed Intel® SGX quote.</p>
    <h3>KubeVirt</h3>
    <p>This open-source project extends Kubernetes with Virtual Machine (VM) support via custom resource definitions (CRDs). It allows non-containerized applications and workloads inside VMs to be treated as Kubernetes managed workloads. This lets VM, container, and pod applications to coexist within a shared Kubernetes environment, supporting communication between Kubernetes pods, VMs, and services on the same cluster.</p>
    <h3>Rook-Ceph (storage orchestration solution)</h3>
    <p>Integrated the Rook-Ceph storage orchestration solution to provide distributed storage for edge applications. This allows storage to be automatically provisioned at the user’s request. It improves data reliability by distributing storage across the cluster, reducing the risk of creating a single point of failure.</p>
    <a class="uk-button uk-button-warning uk-button-small uk-margin-small-bottom">Known Issues</a>
    <h3>Edge Software Provisioner (ESP):</h3>
    <p>Occasionally, ESP fails to build the USB image and provisioning exits with an error. In this case, retry the ESP-based provisioning.</p>
    <p>Occasionally, ESP will build the image incorrectly and the target system – the system you are installing the edge node on – will fail to boot using the image. In this case, retry the ESP-based provisioning.</p>
    <p>Systems using legacy BIOS cannot boot from USB images. The target system must use a UEFI BIOS.</p>
    <h3>Intel® Security Libraries for Data Center (Intel® SecL-DC):</h3>
    <p>The Dell PowerEdge R750 TPM endorsement key is not signed by a known certificate authority. This causes the Intel® SecL-DC HVS application to fail to verify the TPM EK certificate. We are working on resolving this issue with Dell. As a workaround, the system administrator can provision the root CA certificate of the TPM endorsement key to HVS in out-of-band mode.</p>
    <p>The trust agent is unable to read the Platform Configuration Register (PCR) logs from Nationz TPM in Dell R750. This causes the trust agent to fail to generate the attestation with PCR measurements, which causes the HVS create_flavor API call to fail. This will be addressed in an upcoming release.</p>
    <h3>Intel® Software Guard Extensions (Intel® SGX):</h3>
    <p><strong>When</strong> an existing Intel® Provisioning Certification Caching Service (PCCS) deployment located on an AWS instance has been running for over 24 hours, provisioning a new DEK cluster may fail. If this occurs, reset Intel® SGX using the "SGX Factory Reset" option in the BIOS.</p>
    <br>
</div>

<div class="noteLeft">
    <p>April 15th, 2022</p>
</div>

<div class="noteRight">
    <h3>Secure Access Service Edge Experience Kit (22.02)</h3>
    <p>The 22.02 release of Intel&reg; Smart Edge Open features an updated Secure Access Services Edge (SASE) Experience Kit.</p>
    <p>This preview release is available to a pool of early customer adopters. The full experience kit, featuring a full SD-WAN implementation, will be released in the second quarter of 2022. You can <a href="/" title="browse the documentation">browse the documentation</a> for the preview release or <a href="/request-license" title="request a license">request a license</a> for the upcoming full release.</p>
    <a class="uk-button uk-button-info uk-button-small uk-margin-small-bottom">Added</a>
    <p>Remote Attestation for Trusted Computing: Support for remote attestation using the Intel&reg; Security Libraries for Data Center (<a href="https://www.intel.com/content/www/us/en/architecture-and-technology/security-libraries-for-data-center-article.html?wapkw=security%20libraries" target="_blank" title="Intel&reg; SecL – DC" rel="nofollow">Intel&reg; SecL – DC</a>). Remote attestation is the foundation for trusted compute, providing verification of whether or not the operating system is trustworthy.</p>
    <p>Trusted application enclaves: Support for trusted application enclaves using Intel&reg; Software Guard Extensions (<a href="https://www.intel.com/content/www/us/en/cloud-computing/confidential-computing-sgx-video.html?wapkw=SGX" target="_blank" title="Intel&reg; SGX" rel="nofollow">Intel&reg; SGX</a>). Creates a secure execution environment and provides encryption for communication beyond the enclave boundary.</p>
    <p>Automated deployment: The Intel Edge Software Provisioning (ESP) tool has been added to automate the installation of the operating system and software stack on a bare-metal hardware platform. Deployment options include a SASE cloud cluster, a SASE POP (point of presence) cluster, or on a SASE edge cluster.</p>
    <a class="uk-button uk-button-warning uk-button-small uk-margin-small-bottom">Known Issues</a>
    <br><span>Edge Software Provisioner</span><br>
    <span>There are two known intermittent issues with the Edge Software Provisioner (ESP):</span>
    <ul>
        <li>The ESP occasionally fails to build the USB image and exits with an error.</li>
        <li>The ESP occasionally builds an incorrect image. In this case, the target system you are attempting to provision fails to boot.</li>
    </ul>
    <p>Until we are able to provide a fix, the recommendation for both of these cases is to simply retry the process.</p>
    <p>The Edge Software Provisioner cannot boot USB images on machines that use a non-UEFI BIOS. Make sure that the system that will host the edge node has a UEFI BIOS.</p>
    <p>When provisioning new nodes for an existing Developer Experience Kit deployment with Intel&reg; Software Guard Extensions (Intel&reg; SGX) enabled, Edge Software Provisioner may fail in cases when the Provisioning Certificate Caching Service module has exceeded 24 hours of runtime on an AWS cloud instance. In this case, reset Intel&reg; SGX using the “SGX Factory Reset” option in the BIOS.</p>
    <p><span>Dell PowerEdge R750 servers</span><br>The Trusted Platform Management (TPM) endorsement key is not signed by a known Certificate Authority. The Intel&reg; SecL - DC libraries will fail to verify the endorsement key certificate. The system administrator must provision the root CA certificate of the TPM endorsement key to the host verification service in out-of-band mode.</p>
    <h3>Developer Experience Kit (21.12)</h3>
    <a class="uk-button uk-button-info uk-button-small uk-margin-small-bottom">Added</a>
    <p>Expanded the Intel&reg Smart Edge Open edge AI capabilities to demonstrate RAN intelligence, by providing a reference implementation on 3rd-generation Intel&reg     Xeon&reg platforms for near-real-time RAN Intelligent Controller (RIC) from the open-source SD-RAN project.
    </p>
    <p>This reference implementation has an AI/ML-based Intelligent Connection Management xApp with significant optimization for AI inference. It uses the Intel&reg        Distribution of OpenVINO™ toolkit to improve inference latency by approximately 10x, which helps meet 5G latency needs and expands OpenVINO AI inference to        network AI use cases.</p>
    <p>The reference implementation is available through the <a href="https://www.intel.com/content/www/us/en/developer/articles/reference-implementation/intelligent-connection-management.html" target="_blank" title="connection management xApp" rel="nofollow">Intel Developer Catalog</a> and has been announced by the Open Network Foundation (ONF) in their <a href="https://docs.sd-ran.org/master/release_notes/sdran_1.4.html" target="_blank" title="SD-Ran 1.4" rel="nofollow">SD-RAN 1.4 release notes</a>. The Edge AI capabilities in Intel® Smart Edge Open enable multi-vertical and multi-tenant AI services for network automation, intelligent operation and end-user applications.</p>
    <p>This reference implementation with network AI can run on the same edge platform alongside other AI applications for industry, smart cities etc and can be provided by completely different type of ISVs (network software ISVs and IoT solutions ISVs).</p>
    <a class="uk-button uk-button-purple uk-button-small uk-margin-small-bottom">Updated</a>
    <p>Updated four <a href="/docs/product-overview/" target="_blank" title="reference implementations">reference implementations</a> for the Developer Experience Kit. These provide a reference for edge solution builders deploying multi-tenant services on the edge platform. They feature the following use cases:</p>
    <ul>
        <li><a href="https://www.intel.com/content/www/us/en/developer/articles/reference-implementation/wireless-network-ready-pcb-defect-detection.html" title="Industry 4.0" target="_blank" rel="nofollow">Industry 4.0</a></li>
        <li><a href="https://www.intel.com/content/www/us/en/developer/articles/reference-implementation/wireless-network-ready-intelligent-traffic-management.html" title="Smart Cities" target="_blank" rel="nofollow">Smart Cities</a></li>
        <li><a href="https://www.intel.com/content/www/us/en/developer/articles/reference-implementation/telehealth-remote-monitoring.html" title="eHealth" target="_blank" rel="nofollow">eHealth</a></li>
        <li><a href="https://www.intel.com/content/www/us/en/developer/articles/reference-implementation/smart-vr-live-streaming-of-immersive-media.html" title="AR/VR Services" target="_blank" rel="nofollow">AR/VR Services</a></li>
    </ul>
    <p>Each reference implementation demonstrates how to use Node Feature Discovery (NFD) to match edge node resources with processing needs, and how to optimize communication between microservices with Calico CNI. The reference implementations incorporate Intel software frameworks including:</p>
    <ul>
        <li>Edge Insights for Industrial (EII)</li>
        <li>The Intel&reg; Distribution of OpenVINO™ toolkit</li>
        <li>Intel&reg; Collaboration Suite for WebRTC</li>
        <li>software libraries for media processing and acceleration</li>
    </ul>
    <br><br><br>
</div>

<div class="noteLeft">
    <p>January 28th, 2022</p>
</div>

<div class="noteRight">
    <h3>22.01 Updates</h3>
    <p>We are pleased to announce the 22.01 release of Intel&reg; Smart Edge Open software. This release features an updated Private Wireless Experience Kit for CentOS 7.9 that uses Intel&reg; Edge Software Provisioner to automate deployment.</p>
    <a class="uk-button uk-button-info uk-button-small uk-margin-small-bottom">Added</a>
    <p>The <a href="/docs/experience-kits/private-wireless-experience-kit/" title="Intel&reg; Private Wireless Experience Kit">Intel&reg; Private Wireless Experience Kit</a> supports a single orchestration domain, optimizing the edge node to support both applications and NG-RAN and NG-Core network functions such as DU/CU, AMF, SMF, and UPF.</p>
    <p>Autonomous Deployment Through Intel&reg; Edge Software Provisioner (Intel&reg; ESP): Easy provisioning of a multi-node environment with CentOS 7.9. Intel&reg; ESP enables ODMs, system integrators and developers to automate the installation of a complete operating system and software stack on bare-metal or virtual machines using a just-in-time provision process.</p>
    <p>A new SR-IOV FEC operator to configure the Intel&reg; vRAN Accelerator ACC100 Adapter, and a SR-IOV Network Operator to configure the Intel&reg; Ethernet Converged Network Adapter X710-DA4. This replaces the manual process that was needed in the previous version</p>
    <p>Wireless Network Ready Intelligent Traffic Management (ITM) application integration to demonstrate and test the capabilities of the experience kit. Once the application has been deployed on the edge node in a 5G network, the application pod takes in virtual/real RTSP (real time streaming protocol) addresses, performs inference, and sends metadata for each video stream to an InfluxDB database. In parallel, the visualizer overlays the analysis on the metadata, displaying pedestrians detected, collisions observed, and the processed video feed.</p>
    <p>Intel&reg; Ice Lake™ Scalable Processor Support: Support for the Dell EMC PowerEdge&reg; R750 with 3rd Generation Intel&reg; Xeon&reg; Scalable Processors</p>
    <a class="uk-button uk-button-warning uk-button-small uk-margin-small-bottom">Known Issues</a>
    <ul>
        <li>Sometimes the Dell R750 edge node hangs during reboot when using an Ethernet card based on Intel&reg; Ethernet Controller XL710. This is because Intel&reg; Ethernet Controller XL710 based Ethernet cards are not in the Dell official support list. We will upgrade the Private Wireless Experience Kit to use an E810 NIC, which is supported by Dell, in the next release.</li>
        <li>5G CNFs - User equipment sometimes fails to reattach when it moves from idle mode to active mode. This issue will be addressed with future 5G Core CNF upgrades.</li>
    </ul>
    <a href="https://github.com/smart-edge-open/docs/blob/main/release-notes/release-notes-se-open-PWEK-22-01.md" rel="nofollow" target="_blank" title="Read more">Read more</a>
    <br><br><br>
    <style>
        .uk-button.uk-button-info.uk-button-small.uk-margin-small-bottom{ 
            margin-bottom: 20px !important;
            }
    </style>
</div>

<div class="noteLeft">
    <p>December 17th, 2021</p>
</div>

<div class="noteRight">
    <h3>21.12 Updates</h3>
    <p>We are pleased to announce the 21.12 release of Intel&reg; Smart Edge Open software.</p>
    <a class="uk-button uk-button-info uk-button-small uk-margin-small-bottom">Added</a>
    <p>The <a href="/docs/experience-kits/developer-experience-kit">Developer Experience Kit</a> now supports <a href="https://www.intel.com/content/www/us/en/architecture-and-technology/security-libraries-for-data-center-article.html" target="_blank" >Intel&reg; Security Libraries for Data Center</a> (Intel&reg; SecL-DC) for platform integrity.  Platform integrity is established from a collection of both hardware and software that perform measurement and verification to ensure a platform boots into a trusted and desired state.</p>
    <p>In addition, the Developer Experience Kit also supports <a target="_blank" href="https://www.intel.com/content/www/us/en/developer/tools/software-guard-extensions/overview.html"> Intel&reg; Software Guard Extensions</a> (Intel&reg;  SGX) for protection of selected code and data within a hardened enclave. Developers can now partition their application into hardened enclaves or trusted execution environments to increase application security.</p>
    <p>We are excited to announce an O-RAN compliant near-real time RAN Interface Controller (RIC) is available for the Developer Experience Kit and will soon be available for download from the <a target="_blank" href="https://www.intel.com/content/www/us/en/developer/tools/software-catalog/full-catalog.html?s=Newest&q=%22smart%2Bedge%2Bopen%22">Intel&reg; Developer Catalog.</a> The RIC can be used for development and testing of ORAN AI/ML xAPPs. A 5G RAN simulator is provided to facilitate development and testing.</p>
    <p>Support has been added for the next generation Intel&reg; Xeon&reg;  D processor. More details will be provided after the product has launched.</p>
    <br>
    <style>
        .uk-button.uk-button-info.uk-button-small.uk-margin-small-bottom{ 
            margin-bottom: 20px !important;
            }
    </style>
</div>

<div class="noteLeft">
    <p>September 30th, 2021</p>
</div>
<div class="noteRight">
    <h3>21.09 Updates</h3>
    <p>We are pleased to announce the first release Intel&reg; Smart Edge Open.</p>
    <p>Built from an OpenNESS foundation and representing more than two years of development, the 21.09 release of Intel&reg; Smart Edge Open introduces several technical improvements including a new Developer Experience Kit and an upgraded experience kit for creating 5G private wireless networks.</p>
    <a class="uk-button uk-button-info uk-button-small uk-margin-small-bottom">Added</a>
    <p>Introduced the Developer Experience Kit</p>
    <p>Intel&reg; Smart Edge Open is shifting to Ubuntu 20.04 LTS as the default OS in order to simplify future OS support. The Developer Experience kit uses Ubuntu 20.04 LTS. Other experience kits will be updated from CentOS to Ubuntu in future releases</p>
    <ul class="uk-margin-small-top">
        <li>Automated deployment process for experience kits, based on the Intel&reg; Edge Software Provisioner (Intel® ESP). (Currently available in the Developer Experience Kit.)</li>
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
    <a href="/ido-specs/smartedge-open_releasenotes/" title="Previous release notes">Previous release notes</a>
</div>
