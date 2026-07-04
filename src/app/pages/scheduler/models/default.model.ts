export const DEFAULT_PROCTOR_GUIDE = `
<p><span style="font-size: 14pt;"><strong>1. Pre-Exam Preparation:</strong></span></p>
<p><strong>Setup</strong>: Instruct examinees to close all unauthorized browser tabs, turn off unpermitted electronic devices, and clear their desks.</p>
<p><strong>Identification</strong>: Verify the identity of each candidate by checking an official, valid government or student photo ID if required.</p>
<p><strong>Environment</strong>: Confirm that the candidate&rsquo;s workspace is quiet, well-lit, and free from interruptions. Request a room and desk scan if the exam policy requires it.</p>
<p><span style="font-size: 14pt;"><strong>2. Monitoring Procedures</strong> </span></p>
<p><strong>Active Supervision</strong>: Supervise examinees continuously. Ensure webcams are positioned to capture the candidate&rsquo;s face, hands, and surrounding workspace.</p>
<p><strong>Behavior Rules</strong>: Prohibit talking, reading test materials aloud, or looking away from the screen for prolonged periods to avoid monitoring flags.</p>
<p><strong>Bathroom Breaks</strong>: Allow limited, monitored restroom breaks. Ideally, only one candidate should leave at a time, and candidates must not have access to study materials while away from their desks.</p>
<p><strong>Technical Vigilance:</strong> Watch for attempts to switch tabs, mute microphones, or cover cameras. Any suspicious activity should be flagged immediately.</p>
<p><span style="font-size: 14pt;"><strong>3. Incident Management </strong></span></p>
<p><strong>Technical Issues</strong>: If a connection is lost during a test, monitor the frequency of disconnections to determine if they appear intentional. Provide assistance where possible and escalate unresolved issues.</p>
<p><strong>Suspected Cheating</strong>: If a candidate violates testing guidelines, terminate the exam session immediately and document the issue in detail.</p>
<p><strong>Irregularity Reporting</strong>: File a formal incident or irregularity report detailing any breaches of security, technical difficulties, or suspicious behavior for the examining institution to review.</p>
<p><span style="font-size: 14pt;"><strong>4. Professional conduct</strong> </span></p>
<p><strong>Neutrality</strong>: Remain professional, courteous, and impartial at all times. Do not provide hints or exam-related assistance.</p>
<p><strong>Confidentiality</strong>: Protect candidate information and exam content. Consistency: Apply rules fairly and uniformly across all candidates.</p>
 
`

  export const DELIVERY_METHOD_LABEL: { label: string, description: string }[] = [
    { label: 'PROCTOR SUPERVISED', description: 'Exam will be supervised by live proctors.' },
    { label: 'AUTO SUPERVISED', description: 'Exam will be supervised by AI.' },
    { label: 'ONLINE UNSUPERVISED', description: 'Exam will be taken without supervision.' },
    { label: 'CENTER-BASED SECURE', description: 'Exam will be taken in a physical location with the lockdown browser.' },
    { label: 'CENTER-BASED STANDARD', description: 'Exam will be taken in a physical location without the lockdown browser.' },
    { label: 'E-PAPER', description: 'Exam will be taken on a dedicated device.' },
    { label: 'BRING YOUR OWN DEVICE', description: 'Exam will be taken on the candidate\'s own device.' },
  ];

