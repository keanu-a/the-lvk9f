import { ChangeEvent, FormEvent, useState } from "react";

export default function HomeForm() {
  const [contactData, setContactData] = useState({
    email: "",
    message: "",
  });

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(`Email: ${contactData.email}\nMessage: ${contactData.message}`);

    // Clearing contact fields
    setContactData({
      email: "",
      message: "",
    });
  };

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setContactData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <form onSubmit={handleOnSubmit} className="flex justify-around">
      <div className="flex flex-col gap-2">
        <label>
          Email
          <input
            name="email"
            onChange={handleOnChange}
            value={contactData.email}
          />
        </label>
        <textarea
          placeholder="Enter your message here..."
          name="message"
          onChange={handleOnChange}
          value={contactData.message}
        />
      </div>

      <button className="bg-main-yellow">Send</button>
    </form>
  );
}
