"use strict";(self.webpackChunkdocusaurus_static=self.webpackChunkdocusaurus_static||[]).push([[9882],{7246:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=i(5893),r=i(1151);const s={},a="Appendix C: Certificate Signing",o={id:"appendixc",title:"Appendix C: Certificate Signing",description:"TAK Clients can enroll for new client certificates by submitting a Certificate Signing Request (CSR) to TAK Server. The Certificate Signing endpoint resides on port 8446 and requires HTTP Basic Authentication backed by either File or LDAP authentication. Ensure that the tomcat connector for port 8446 is active within tomcat-home/conf/server.xml.",source:"@site/docs/appendixc.md",sourceDirName:".",slug:"/appendixc",permalink:"/docs/appendixc",draft:!1,unlisted:!1,editUrl:"https://gitlab.com/octospacc/editocttrialTools/-/blob/main/docusaurus-static/docs/appendixc.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Appendix B: Certificate Generation",permalink:"/docs/appendixb"},next:{title:"Appendix D: PostgreSQL TLS Configuration",permalink:"/docs/appendixd"}},c={},l=[];function d(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"appendix-c-certificate-signing",children:"Appendix C: Certificate Signing"}),"\n",(0,n.jsx)(t.p,{children:"TAK Clients can enroll for new client certificates by submitting a Certificate Signing Request (CSR) to TAK Server. The Certificate Signing endpoint resides on port 8446 and requires HTTP Basic Authentication backed by either File or LDAP authentication. Ensure that the tomcat connector for port 8446 is active within tomcat-home/conf/server.xml."}),"\n",(0,n.jsx)(t.p,{children:'The CertificateSigning section in CoreConfig.xml specifies how CSRs are processed. TAK Server can be configured to sign certificates directly, or proxy CSRs to a Microsoft CA instance running Certificate Enrollment Services. To configure TAK Server to sign certificates, set the CA attribute to "TAKServer". To configure TAK Server to proxy the CSR to MS CA, set the CA attribute to "MicrosoftCA".'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'<certificateSigning CA="{TAKServer | MicrosoftCA}">\n  <certificateConfig>\n    <nameEntries>\n      <nameEntry name="O" value="Test Org Name"/>\n      <nameEntry name="OU" value="Test Org Unit Name"/>\n    </nameEntries>\n  </certificateConfig>\n  <TAKServerCAConfig\n    keystore="JKS"\n    keystoreFile="../certs/files_intCA/intermediate-ca-signing.jks"\n    keystorePass="atakatak"\n    validityDays="30"\n    signatureAlg="SHA256WithRSA" />\n  <MicrosoftCAConfig\n    username="{MS CA Username}"\n    password="{MS CA Password}"\n    truststore="/opt/tak/certs/files_MSCA/keystore.jks"\n    truststorePass="atakatak"\n    svcUrl="https://win-kbtud3n1hjl.tak.net/tak-WIN-KBTUD3N1HJL-CA_CES_UsernamePassword/service.svc"\n    templateName="Copy of User"/>\n</certificateSigning>\n'})}),"\n",(0,n.jsx)(t.p,{children:"Prior to submitting a CSR, Clients query TAK Server for Relative Distinguished Names (RDNs) that need to go into the CSR. The nameEntries element in CoreConfig.xml specifies the required RDNs, giving the administrator control over generated certificates. The CN value in the CSR will be equal to the HTTP username. TAK Server validates all required fields in the CSR prior to signing."}),"\n",(0,n.jsx)(t.p,{children:"The extra step of having client query TAK Server for RDNs wouldn't be required if TAK Server were signing certificates exclusively, since TAK Server could just add these names to the certificate. However, when proxying the CSR to an external CA, this allows additional flexibility in controlling the subject name within the certificate."}),"\n",(0,n.jsx)(t.p,{children:"The TAKServerCAConfig element specifies the keystore that TAK Server will use for signing certificates. The keystore must hold the CA's private key along with it's full trust chain. The makeCert.sh script will produce a signing keystore when generating an intermediate CA certificate. Certificates signed by TAK Server will be valid for the specified validityDays, and will be signed using the algorithm specified by signatureAlg."}),"\n",(0,n.jsx)(t.p,{children:"The MicrosoftCAConfig element defines how TAK Server will connect to the Certificate Enrollment Services (CES) endpoint. The CES endpoint is defined by the svcUrl attribute. The CES endpoint must be configured to use Username/Password authentication, and by default will include 'UsernamePassword' in the URL. The username and password attributes refer to an account configured on the MS CA Server to access the the CES endpoint. The truststore and truststorePass attrbitues point to a Java keystore (.jks) file that contains the trust chain for the svcUrl endpoint. Lastly, the templateName defines the certificate template that will be used to sign CSRs sent from TAK Server."})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>a});var n=i(7294);const r={},s=n.createContext(r);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);