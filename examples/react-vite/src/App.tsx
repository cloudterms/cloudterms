import { CloudTermsProvider } from "@cloudterms/react";
import { useState } from "react";

const term = `<h2><strong>Terms of Service for CloudTerms</strong></h2><p><strong>1. Acceptance of Terms</strong></p><p>By accessing and using CloudTerms, you agree to be bound by these Terms of Service (\"Terms\"), all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p><p><strong>2. Use License</strong></p><ul><li><p>Permission is granted to temporarily download one copy of the materials (information or software) on CloudTerms' web site for personal, non-commercial transitory viewing only.</p></li><li><p>This is the grant of a license, not a transfer of title, and under this license, you may not:</p><ul><li><p>modify or copy the materials;</p></li><li><p>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</p></li><li><p>attempt to decompile or reverse engineer any software contained on CloudTerms' website;</p></li><li><p>remove any copyright or other proprietary notations from the materials; or</p></li><li><p>transfer the materials to another person or \"mirror\" the materials on any other server.</p></li></ul></li></ul><p><strong>3. Disclaimer</strong></p><p>The materials on CloudTerms' website are provided \"as is\". CloudTerms makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p><p><strong>4. Limitations</strong></p><p>In no event shall CloudTerms or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on CloudTerms' Internet site, even if CloudTerms or a CloudTerms authorized representative has been notified orally or in writing of the possibility of such damage.</p><p><strong>5. Revisions and Errata</strong></p><p>The materials appearing on CloudTerms' website could include technical, typographical, or photographic errors. CloudTerms does not warrant that any of the materials on its web site are accurate, complete, or current. CloudTerms may make changes to the materials contained on its web site at any time without notice. CloudTerms does not, however, make any commitment to update the materials.</p><p><strong>6. Links</strong></p><p>CloudTerms has not reviewed all of the sites linked to its Internet web site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by CloudTerms of the site. Use of any such linked website is at the user's own risk.</p><p><strong>7. Site Terms of Use Modifications</strong></p><p>CloudTerms may revise these terms of use for its web site at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms and Conditions of Use.</p><p><strong>8. Governing Law</strong></p><p>Any claim relating to CloudTerms' web site shall be governed by the laws of the State without regard to its conflict of law provisions.</p><p><strong>9. Contact Information</strong></p><p>For any questions or concerns regarding these Terms, please contact us at [contact information].</p><p>This document is provided as a basic template and should be customized to meet your specific legal requirements and circumstances. It's essential to consult with a legal professional to ensure that your Terms of Service are comprehensive, comply with all relevant laws and regulations, and are enforceable.</p>`;

function App() {
  const [hasAgreed, setHasAgreed] = useState(false);

  const onAgree = () => {
    console.log("agreed");
    setHasAgreed(true);
  };

  return (
    <div>
      <CloudTermsProvider
        userId="my-user-id"
        terms={[
          {
            applicationId: "my-application-id",
            content: term,
            createdAt: new Date(),
            updatedAt: new Date(),
            id: 1,
            name: "Terms of Service",
            orgId: "my-org-id",
            termId: "my-term-id",
            userId: "my-user-id",
          },
        ]}
        hasAgreed={hasAgreed}
        onAgree={onAgree}
      >
        <h1>Here is my application</h1>
      </CloudTermsProvider>
    </div>
  );
}

export default App;
