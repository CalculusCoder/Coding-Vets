import React from "react";
import Layout from "@/components/global/Layout";

const CourseInfo = () => {
  return (
    <Layout>
      <div className="mt-10">
        <header className="text-center text-4xl font-semibold">
          Coding Vets Curriculum
        </header>
        <section className="mt-6">
          <h1 className="text-xl font-semibold">Course Overview</h1>
          <p>
            The Coding Vets Curriculum will last aboutg 9-13 weeks. We will
            teach you the fundumentals of web development and software
            engineering from scratch. We go in depth with courses on HTML, CSS,
            and Javascript. Our main goal is to take you from zero to hero or
            beginner to entry level developer. All Coding Vet courses will be
            down through remote with an instructor, Jared, Or Sean. Each class
            will contain 6-8 students.
          </p>
        </section>
        <section className="mt-6">
          <h1 className="text-xl font-semibold">Requirements</h1>
          <p>
            This course is delivered entirely online and remotely. Here are a
            list of some of the requirments
          </p>
          <ul>
            You must be an Active Duty Troop, Honorable Discharged Veteran
            regardless of age.
          </ul>
          <ul>
            You must own a computer, PC or Laptop, that is not too slow. It can
            be a windows, mac, or Linux Machine.
          </ul>
          <ul>
            You must be eager to learn web development/software engineering and
            willing to be commited to complete the full program.
          </ul>
        </section>
        <section className="mt-6">
          <h1 className="text-xl font-semibold">Course Lessons</h1>
          <header>HTML</header>
          <p>Course Duration: 2-3 Weeks</p>
        </section>
      </div>
    </Layout>
  );
};

export default CourseInfo;
