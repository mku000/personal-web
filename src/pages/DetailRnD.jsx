import React from 'react';
import { IoGitBranchOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const DetailRnD = () => {
  return (
    <div className='p-5' style={{ maxWidth: "40rem" }}>
          <div className="front-text side-margin" style={{ display: 'flex', marginBottom: '16px', alignItems: 'center', fontSize: '12px' }}>
    <Link to="/rnd" className="hover:underline">
      BACK
    </Link>
    </div>
      <div style={{ display: 'flex', fontWeight: 700, color: 'black', fontSize: '12px' }}>
        Background :
      </div>
      <p>
        In the realm of education, many teachers encounter significant challenges in managing the administrative and organizational aspects of their work. This includes organizing manuals, scheduling classes, recalling important details about each class, and accessing and utilizing curriculum-aligned textbooks. These challenges often lead to stress and fatigue among teachers, which can, in turn, affect the quality of teaching and learning in the classroom.
      </p>
      <br />
      <div style={{ display: 'flex', fontWeight: 700, color: 'black', fontSize: '12px' }}>
        Technology Solution: Teachers Pocket :
      </div>
      <p>
        Centralized Manual Book Management: Teachers Pocket provides a centralized platform where teachers can easily access, store, and share digital manuals. This eliminates the need for physical manuals that are prone to loss or damage, and enables teachers to quickly access relevant learning materials anytime, anywhere.
      </p>
      <br />
      <p>
        Integrated Class Scheduling: The platform offers integrated class scheduling features, allowing teachers to easily view their class schedules for each day, week, or month. They can also effortlessly add details such as assignments, exams, or special events to the schedule.
      </p>
      <br />

      <p>
        Real-Time Class Activity Tracking: Teachers Pocket enables teachers to record details about classroom activities, such as topics taught, assignments given, or student behavior. This information is available in real-time, allowing teachers to stay organized and adjust their lesson plans as needed.
      </p>
      <br />

      <p>
        Access to Digital Textbooks and Learning Resources: The platform provides easy access to various digital textbooks aligned with the curriculum and subjects taught. Teachers can easily search, navigate, and utilize additional learning resources to support their teaching.
      </p>
      <br />

      <p>
        Analysis and Reporting: Teachers Pocket also offers analysis and reporting features that allow teachers to track student progress, identify learning patterns, and generate detailed reports on class activities and achievements. This helps teachers evaluate the effectiveness of their teaching methods and plan remedial actions if needed.
      </p>
      <br />

      <p>
        With technology solutions like Teachers Pocket, teachers can overcome administrative and organizational challenges in their work, improve the efficiency and effectiveness of their teaching, and create a more structured and focused learning environment for students.
      </p>


      <div className="front-text side-margin mt-5 gap-2" style={{ display: 'flex', marginBottom: '16px', alignItems: 'center', fontSize: '14px' }}>
        <label>   mku000 /</label>
    <Link to="https://github.com/mku000/teachers-pocket" target='_blank' className="hover:underline">
        <b>

  teachers-pocket
        </b>
    </Link>

    <IoGitBranchOutline style={{fontSize:"16px"}} />    
    </div>
    </div>
  )
}

export default DetailRnD;
