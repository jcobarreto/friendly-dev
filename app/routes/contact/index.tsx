import type { Route } from "./+types";
import { Form } from "react-router";

export async function action ({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  const errors: Record<string, string> = {};

  if (!name) errors.name = "Name is required";
  if (!email) {
    errors.email = "Email is required"
  } else if (typeof email === "string" && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    errors.email = "Invalid email format";
  };
  if (!subject) errors.subject = "Subject is required";
  if (!message) errors.message = "Message is required";

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const data = {
    name,
    email,
    subject,
    message
  };

  return { message: "Form submitted successfully", data };
}

function ContactPage({ actionData }: Route.ComponentProps) {
  const errors = actionData?.errors || {};

  return (
    <div className="max-w-3xl mx-auto mt-12 px-6 py-8 bg-gray-900">
      <h2 className="text-3xl text-bold text-white mb-8 text-center">
        📬 Contact Me
      </h2>

      { actionData?.message && (
        <p className="mb-6 p-4 bg-green-700 text-green-100 text-center rounded-lg border-green-500 shadow-md">
          {actionData.message}
        </p>
      ) }

      <Form method="post" className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"
          />
          { errors.name && (
            <p className="text-red-400 text-sm mt-1">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            E-mail
          </label>
          <input
            type="text"
            id="email"
            name="email"
            required
            className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"
          />
          { errors.email && (
            <p className="text-red-400 text-sm mt-1">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"
          />
          { errors.subject && (
            <p className="text-red-400 text-sm mt-1">
              {errors.subject}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"
          />
          { errors.message && (
            <p className="text-red-400 text-sm mt-1">
              {errors.message}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 cursor-pointer"
          >
            Send Message
          </button>
        </div>
      </Form>
    </div>
  );
}

export default ContactPage;
