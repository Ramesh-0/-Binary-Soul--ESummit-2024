// src/pages/ExplorePage.js
import React from 'react';
import { motion } from 'framer-motion';

function ExplorePage() {
  return (
    <section className="bg-soft-red min-h-screen py-16 px-4">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-red-900 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ marginTop: '4rem' }} // Adjust the top margin to move the title downward
        >
          Explore the Indian Constitution
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mb-8 whitespace-nowrap overflow-hidden text-ellipsis"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Dive into detailed articles, interactive content, and educational resources about the Indian Constitution.
        </motion.p>
      </div>
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-[#e36565] text-white px-4 py-2 flex items-center"> {/* Updated color */ }
            <div className="w-1/4 font-semibold">Serial No</div>
            <div className="w-1/2 font-semibold">Content</div>
            <div className="w-1/4 font-semibold">Link</div>
          </div>
          <div className="divide-y divide-gray-200">
            {/* Row 1 */}
            <div className="flex items-center px-4 py-2">
              <div className="w-1/4 text-gray-900">1</div>
              <div className="w-1/2 text-gray-800">The Indian Constitution</div>
              <a 
                href="https://lddashboard.legislative.gov.in/sites/default/files/coi/COI_2024.pdf" 
                className="w-1/4 text-blue-500 hover:underline"
                target="_blank" 
                rel="noopener noreferrer"
              >
                View
              </a>
            </div>
            {/* Row 2 */}
            <div className="flex items-center px-4 py-2 bg-gray-100">
              <div className="w-1/4 text-gray-900">2</div>
              <div className="w-1/2 text-gray-800">Preamble and Fundamental Rights</div>
              <a href="#link2" className="w-1/4 text-blue-500 hover:underline">Read More</a>
            </div>
            {/* Row 3 */}
            <div className="flex items-center px-4 py-2">
              <div className="w-1/4 text-gray-900">3</div>
              <div className="w-1/2 text-gray-800">Duties and Directive Principles</div>
              <a href="#link3" className="w-1/4 text-blue-500 hover:underline">Read More</a>
            </div>
            {/* Additional Rows */}
            {[
              { id: 4, content: 'Amendments to the Constitution', link: '#link4' },
              { id: 5, content: 'Separation of Powers', link: '#link5' },
              { id: 6, content: 'Federalism and State Relations', link: '#link6' },
              { id: 7, content: 'Judicial Review and Supreme Court', link: '#link7' },
              { id: 8, content: 'Legislature and Parliament', link: '#link8' },
              { id: 9, content: 'Executive Powers and President', link: '#link9' },
              { id: 10, content: 'Constitutional Bodies', link: '#link10' },
              { id: 11, content: 'Schedules of the Constitution', link: '#link11' },
              { id: 12, content: 'Election Laws and Procedures', link: '#link12' },
              { id: 13, content: 'Emergency Provisions', link: '#link13' },
            ].map((row, index) => (
              <div key={row.id} className={`flex items-center px-4 py-2 ${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
                <div className="w-1/4 text-gray-900">{row.id}</div>
                <div className="w-1/2 text-gray-800">{row.content}</div>
                <a href={row.link} className="w-1/4 text-blue-500 hover:underline">Read More</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExplorePage;
