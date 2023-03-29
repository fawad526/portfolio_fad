import React from 'react'
import './education.css';

const Education = () => {
  return <table className="table1">
    <thead>
        <tr>
            <th>Degree</th>
            <th>Department</th>
            <th>Institute</th>
            <th>Year</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Bachelors of Science</td>
            <td>Software Engineering</td>
            <td>Air University Islamabad</td>
            <td>2019-2023</td>
        </tr>
        <tr>
            <td>Intermediate</td>
            <td>Pre engineering</td>
            <td>Fazaia Degree College MRF Kamra</td>
            <td>2018-2019</td>
        </tr>
        <tr>
            <td>Matriculation</td>
            <td>Science</td>
            <td>Fazaia Degree College MRF Kamra</td>
            <td>2017-2019</td>
        </tr>
    </tbody>
  </table>

}

export default Education