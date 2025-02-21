import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicy = () => {
  const projectName = import.meta.env.VITE_PROJECT_NAME;
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <Card className="w-full max-w-4xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-4xl text-green-600 font-bold">
            Privacy Policy
          </CardTitle>
          <div>
            <p className="text-sm text-gray-500 inline">
              Effective Date: January 12, 2025
            </p>
            <span className="text-sm text-gray-500 mx-2">|</span>
            <p className="text-sm text-gray-500 inline">
              author: {projectName}
            </p>
          </div>
        </CardHeader>

        <Separator />

        <CardContent className="space-y-6 text-gray-700 leading-relaxed">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-green-600">
              1. Introduction
            </h2>
            <p>
              Welcome to QNotes AI. We care about your personal information and
              are committed to protection. This Privacy Policy sets out how we
              collect, use, store, and protect your information while you
              interact with our Chrome extension. By using our services, you
              agree to the terms described below. If you don&apos;t agree, we
              would appreciate it if you didn&apos;t use our services.
            </p>
          </section>

          <Separator />

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-semibold text-green-600">
              2. Information We Collect
            </h2>
            <p>
              We collect various types of information to provide and improve our
              services, including:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Audio Data:</strong> Temporarily captured from your
                browser tab or microphone solely for transcription and
                summarization purposes. This data is processed in real-time and
                is not stored.
              </li>
              <li>
                <strong>Usage Data:</strong> Information on how you interact
                with the extension (e.g., features used, frequency, and
                duration) to enhance performance and usability.
              </li>
              <li>
                <strong>Device and Technical Data:</strong> Browser type,
                version, operating system, and other technical details for
                troubleshooting and optimizing user experience.
              </li>
              <li>
                <strong>Cookies and Tracking Technologies:</strong> Small data
                files used to manage sessions, preferences, and authentication
                to provide a seamless user experience.
              </li>
            </ul>
          </section>

          <Separator />

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-semibold text-green-600">
              3. How We Use Your Information
            </h2>
            <p>Your information is utilized in the following ways:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                To provide real-time audio transcription and summarization
                services.
              </li>
              <li>
                To enhance the extension&apos;s performance, functionality, and
                user experience.
              </li>
              <li>
                To diagnose technical issues and maintain the security of the
                extension.
              </li>
              <li>
                To manage secure user authentication and session continuity.
              </li>
              <li>
                To comply with legal obligations and enforce our Terms of
                Service.
              </li>
            </ul>
          </section>

          <Separator />

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-semibold text-green-600">
              4. Data Security
            </h2>
            <p>
              We implement industry-standard security measures to protect your
              data from unauthorized access, alteration, disclosure, or
              destruction. Key security practices include:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Encryption of data in transit using secure protocols (SSL/TLS).
              </li>
              <li>
                Restricted access to sensitive data, granted only to authorized
                personnel.
              </li>
              <li>Regular security audits and vulnerability assessments.</li>
              <li>
                Secure integration with third-party APIs for audio processing.
              </li>
            </ul>
            <p>
              Please note that while we strive to protect your data, no method
              of transmission over the Internet or electronic storage is 100%
              secure.
            </p>
          </section>

          <Separator />

          {/* Third-Party Services */}
          <section>
            <h2 className="text-2xl font-semibold text-green-600">
              5. Third-Party Services
            </h2>
            <p>
              We partner with trusted third-party service providers in
              processing audio files. The service providers respect their
              privacy policies strictly and access information only necessary to
              transcribe or summarize. We do not sell, trade, or rent your data
              to marketing third parties. Third-party services are subject to
              their respective privacy policies. End.
            </p>
            <p>
              Third-party services are governed by their privacy policies, and
              we encourage you to review them for additional details.
            </p>
          </section>

          <Separator />

          {/* User Rights */}
          <section>
            <h2 className="text-2xl font-semibold text-green-600">
              6. Your Rights and Choices
            </h2>
            <p>
              As a user, you have the following rights regarding your personal
              data:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Access:</strong> Request a copy of the personal data we
                hold about you.
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate or
                incomplete data.
              </li>
              <li>
                <strong>Deletion:</strong> Request the deletion of your personal
                data, subject to legal obligations.
              </li>
              <li>
                <strong>Restriction:</strong> Request that we limit the
                processing of your data under certain conditions.
              </li>
              <li>
                <strong>Objection:</strong> Object to our processing of your
                data for specific purposes.
              </li>
            </ul>
            <p>
              To exercise these rights, please contact us at{" "}
              <a
                href="mailto:admin@qnotes.in"
                className="text-blue-600 underline"
              >
                admin@qnotes.in
              </a>
              . We will respond to your request within a reasonable timeframe.
            </p>
          </section>

          <Separator />

          {/* Policy Updates */}
          <section>
            <h2 className="text-2xl font-semibold text-green-600">
              7. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes
              in our practices, technology, or legal requirements. We will
              notify users of significant changes by updating the
              &quot;Effective Date&quot; and providing prominent notice within
              the extension.
            </p>
            <p>
              Continued use of our services after updates constitutes your
              acceptance of the revised policy.
            </p>
          </section>

          <Separator />

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold text-green-600">
              8. Contact Us
            </h2>
            <p>
              If you have any questions, concerns, or feedback regarding this
              Privacy Policy or our data practices, please reach out to us:
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:admin@qnotes.in"
                className="text-blue-600 underline"
              >
                admin@qnotes.in
              </a>
            </p>
            <p>
              We are committed to addressing your concerns promptly and
              transparently.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default PrivacyPolicy;
