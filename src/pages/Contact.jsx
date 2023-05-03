import React, {useState} from "react";
import { Link } from "react-router-dom";
import FormField from "../partials/FormField";
import PageIllustration from "../partials/PageIllustration";

const Contact = () => {

    const [ isLoading, setIsLoading ] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleFormFieldChange = (fieldName, e) => {
        setForm({... form, [fieldName]: e.target.value})
    }

    const handleSubmit = async () => {
        e.preventDefault();
    }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <main className="grow">
        {/* page content */}
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>
        

        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h2 className="h2">
                  Contact W.J Motors, We responds to all your messages.
                </h2>
              </div>
              <div className="max-w-sm mx-auto">
              <form>
                <div className="flex flex-wrap -mx-3 mb-4">
                    <FormField 
                    labelName="Full Name"
                    placeholder="Name & Surname"
                    inputType="text"
                    />
                </div>
                <div className="flex flex-wrap -mx-3 mb-4">
                    <FormField 
                    labelName="Your Email"
                    placeholder="you@sample.com"
                    inputType="text"
                    />
                </div>

                <div className="flex flex-wrap -mx-3 mb-4">
                    <FormField 
                    labelName="Message"
                    placeholder="Write us a message"
                    isTextArea
                    />
                </div>
                <div className="flex flex-wrap -mx-3 mt-6">
                  <div className="w-full px-3">
                    <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">
                     Submit
                    </button>
                  </div>
                </div>
              </form>
              </div>
           
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
