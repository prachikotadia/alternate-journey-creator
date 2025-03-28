
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import UniverseForm from "@/components/UniverseForm";

const CreateUniverse = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-16">
        <section className="py-16">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <h1 className="text-4xl font-bold mb-4">Create Your Parallel Universe</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  Tell us about your current life and what alternate paths you'd like to explore. Our AI will generate a detailed simulation of your parallel universe.
                </p>
              </div>
              
              <UniverseForm />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CreateUniverse;
