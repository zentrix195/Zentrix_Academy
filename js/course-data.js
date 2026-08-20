// Structured course content used by the landing page, dashboard, and lesson player.
export const COURSE_DATA = {
  title: 'Zentrix Certified Marketing Specialist',
  description: 'A modern digital marketing curriculum designed for professionals and aspiring marketers.',
  modules: [

    // Module 1: Introduction to Marketing
    {
      id: 'module-1',
      title: 'Module 1: Introduction to Marketing',
      lessons: [
        {
          id: 'lesson-1',
          title: 'Module Overview',
          duration: '10 min',
          content: [
            { type: 'paragraph', value: 'This module introduces the foundations of marketing, why it matters, and how professionals create value for customers and businesses.' },
            { type: 'heading', level: 3, value: 'Course level' },
            { type: 'paragraph', value: 'Beginner' },
            { type: 'heading', level: 3, value: 'Estimated duration' },
            { type: 'paragraph', value: '8-10 hours' },
            { type: 'heading', level: 3, value: 'Learning objectives' },
            { type: 'list', items: ['Define marketing in simple and professional terms.', 'Explain why marketing matters.', 'Distinguish marketing from selling.', 'Identify customer needs and wants.', 'Explain the marketing process.', 'Recognize major marketing types and career paths.'] }
          ]
        },
        {
          id: 'lesson-2',
          title: 'What Is Marketing?',
          duration: '15 min',
          content: [
            { type: 'paragraph', value: 'Marketing is the process of identifying customer needs, creating products or services that meet those needs, communicating their value, and building lasting relationships that benefit both the customer and the business.' },
            { type: 'paragraph', value: 'Marketing begins long before a product is sold and continues after the sale through customer support, follow-up, and relationship building.' },
            { type: 'heading', level: 3, value: 'Simple definition' },
            { type: 'paragraph', value: 'Marketing is helping the right people discover the right solution to their problems.' }
          ]
        },
        {
          id: 'lesson-3',
          title: 'Why Marketing Matters',
          duration: '18 min',
          content: [
            { type: 'paragraph', value: 'Without marketing, even the best product may never reach the people who need it.' },
            { type: 'heading', level: 3, value: 'Marketing helps businesses' },
            { type: 'list', items: ['Create awareness.', 'Attract customers.', 'Increase sales.', 'Build trust.', 'Retain customers.', 'Understand customer needs.', 'Stay competitive.'] }
          ]
        },
        {
          id: 'lesson-4',
          title: 'Marketing vs. Selling',
          duration: '12 min',
          content: [
            { type: 'paragraph', value: 'Many people think marketing and selling are the same, but they are different.' },
            { type: 'heading', level: 3, value: 'Key difference' },
            { type: 'list', items: ['Marketing focuses on understanding customer needs, creating value, and building trust.', 'Selling focuses on completing a purchase after a customer has shown interest.'] }
          ]
        },
        {
          id: 'lesson-5',
          title: 'Understanding Customer Needs and Wants',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'Every successful marketer understands customers before promoting products.' },
            { type: 'heading', level: 3, value: 'Needs vs wants' },
            { type: 'list', items: ['A need is something essential for daily life or solving an important problem.', 'A want is the specific way a person chooses to satisfy that need.'] }
          ]
        },
        {
          id: 'lesson-6',
          title: 'The Marketing Process',
          duration: '16 min',
          content: [
            { type: 'paragraph', value: 'A professional marketer follows a repeatable process that begins with problem discovery and ends with improvement after feedback.' },
            { type: 'heading', level: 3, value: 'Steps in the process' },
            { type: 'orderedList', items: ['Identify customer problems.', 'Study the target audience.', 'Develop a suitable solution.', 'Set an appropriate price.', 'Choose the best distribution channels.', 'Promote the product honestly.', 'Build customer relationships.', 'Gather feedback.', 'Improve continuously.'] }
          ]
        },
        {
          id: 'lesson-7',
          title: 'The 4 Ps of Marketing',
          duration: '12 min',
          content: [
            { type: 'paragraph', value: 'The four core elements of marketing are product, price, place, and promotion.' },
            { type: 'table', headers: ['Element', 'Meaning'], rows: [['Product', 'What is being offered to customers.'], ['Price', 'The amount customers pay and the value they receive.'], ['Place', 'Where and how customers can obtain the product.'], ['Promotion', 'How the product is informed and persuaded through marketing channels.']] }
          ]
        },
        {
          id: 'lesson-8',
          title: 'Types of Marketing',
          duration: '15 min',
          content: [
            { type: 'paragraph', value: 'Marketing can take many forms, from traditional media to digital channels and relationship-based approaches.' },
            { type: 'heading', level: 3, value: 'Examples' },
            { type: 'list', items: ['Traditional marketing: newspapers, radio, television, billboards, flyers.', 'Digital marketing: websites, email, search engines, online advertising.', 'Social media marketing: Facebook, Instagram, LinkedIn, TikTok, YouTube, WhatsApp, Telegram, and X.', 'Organic marketing: genuine relationships and trust-based influence.'] }
          ]
        },
        {
          id: 'lesson-9',
          title: 'Products and Services',
          duration: '12 min',
          content: [
            { type: 'paragraph', value: 'Marketing applies to physical products, digital products, and services.' },
            { type: 'heading', level: 3, value: 'Examples' },
            { type: 'list', items: ['Physical products: clothing, furniture, phones, computers.', 'Digital products: software, apps, e-books, online courses, templates.', 'Services: web development, consulting, training, graphic design.'] }
          ]
        },
        {
          id: 'lesson-10',
          title: 'Business Models',
          duration: '12 min',
          content: [
            { type: 'paragraph', value: 'Businesses can operate in different models depending on who they serve.' },
            { type: 'heading', level: 3, value: 'Common models' },
            { type: 'list', items: ['B2B: one business sells to another business.', 'B2C: a business sells directly to individual customers.', 'C2C: individuals sell to other individuals through marketplaces.'] }
          ]
        },
        {
          id: 'lesson-11',
          title: 'Marketing Careers',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'Marketing offers many career paths that require continuous learning as technology and customer behavior change.' },
            { type: 'heading', level: 3, value: 'Examples of roles' },
            { type: 'list', items: ['Marketing Specialist', 'Digital Marketing Specialist', 'Social Media Manager', 'Content Creator', 'Sales Representative', 'Brand Manager', 'Affiliate Manager', 'SEO Specialist', 'Email Marketing Specialist', 'Customer Success Manager', 'Marketing Consultant.'] }
          ]
        },
        {
          id: 'lesson-12',
          title: 'The Role of a Zentrix Marketing Specialist',
          duration: '16 min',
          content: [
            { type: 'paragraph', value: 'A Zentrix Marketing Specialist should represent the company professionally, explain products clearly, build trust through honesty, and create value for customers.' },
            { type: 'heading', level: 3, value: 'Key responsibilities' },
            { type: 'list', items: ['Understand customer needs.', 'Explain products clearly.', 'Create helpful content.', 'Generate qualified leads.', 'Follow up with prospects.', 'Support customers after the sale.', 'Protect the company’s reputation.'] }
          ]
        },
        {
          id: 'lesson-13',
          title: 'Practical Activities and Key Takeaways',
          duration: '18 min',
          content: [
            { type: 'paragraph', value: 'A practical activity is to choose a product you use every day and describe the need it satisfies, why you chose it, how you first learned about it, and which marketing methods influenced your decision.' },
            { type: 'paragraph', value: 'You can also review the case study of a fictional Zentrix product and think about how a consultative, trust-based marketing approach can create stronger customer relationships.' },
            { type: 'heading', level: 3, value: 'Key takeaways' },
            { type: 'list', items: ['Marketing is about creating value and building relationships.', 'Selling is one part of marketing, not the whole process.', 'Understanding customers is the foundation of effective marketing.', 'Trust is one of the marketer’s most valuable assets.'] }
          ]
        }
      ]
    },

    // Module 2: Consumer Psychology
    {
      id: 'module-2',
      title: 'Module 2: Consumer Psychology',
      lessons: [
        {
          id: 'lesson-14',
          title: 'Introduction to Consumer Psychology',
          duration: '12 min',
          content: [
            { type: 'paragraph', value: 'Marketing is not just about promoting products; it is about understanding people.' },
            { type: 'paragraph', value: 'Consumer psychology is the study of how people think, feel, and make decisions before, during, and after buying products or services.' },
            { type: 'heading', level: 3, value: 'Key questions' },
            { type: 'list', items: ['Why do customers choose one product over another?', 'Why do customers trust certain brands?', 'Why do some advertisements work better than others?', 'Why do customers sometimes abandon a purchase?'] }
          ]
        },
        {
          id: 'lesson-15',
          title: 'Why People Buy',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'People rarely buy products simply because they exist. They buy because they believe those products improve some aspect of their lives.' },
            { type: 'heading', level: 3, value: 'Common reasons' },
            { type: 'list', items: ['Solving a problem.', 'Saving time.', 'Saving money.', 'Improving health.', 'Increasing income.', 'Learning new skills.', 'Convenience.', 'Safety and security.', 'Entertainment.', 'Social recognition.', 'Personal growth.'] }
          ]
        },
        {
          id: 'lesson-16',
          title: 'Needs, Wants, and Desires',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Needs are essentials or basic problems that require solutions. Wants are the preferred way of meeting those needs. Desires are stronger emotional preferences shaped by personality, culture, experiences, or aspirations.' },
            { type: 'heading', level: 3, value: 'Examples' },
            { type: 'list', items: ['Need: communication. Want: a modern smartphone. Desire: a premium phone because of design, status, or reputation.'] }
          ]
        },
        {
          id: 'lesson-17',
          title: 'Factors That Influence Buying Decisions',
          duration: '16 min',
          content: [
            { type: 'paragraph', value: 'Several factors affect purchasing decisions, including personal, social, cultural, and psychological influences.' },
            { type: 'table', headers: ['Category', 'Examples'], rows: [['Personal', 'Age, occupation, income, lifestyle, education.'], ['Social', 'Family, friends, colleagues, community, social media.'], ['Cultural', 'Traditions, customs, local values.'], ['Psychological', 'Motivation, perception, emotions, beliefs.']] }
          ]
        },
        {
          id: 'lesson-18',
          title: 'Types of Customers',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'Every customer is different, and each one may need a different communication approach.' },
            { type: 'heading', level: 3, value: 'Common customer types' },
            { type: 'list', items: ['Price-conscious customer.', 'Quality-conscious customer.', 'Busy customer.', 'Research-oriented customer.', 'Loyal customer.', 'Skeptical customer.'] }
          ]
        },
        {
          id: 'lesson-19',
          title: 'Building Customer Trust',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Trust is the foundation of successful marketing. Customers trust businesses that are honest, keep promises, communicate clearly, and deliver quality consistently.' },
            { type: 'heading', level: 3, value: 'Trust grows through' },
            { type: 'list', items: ['Consistency.', 'Responsiveness.', 'Respect.', 'Transparency.', 'Accountability.'] }
          ]
        },
        {
          id: 'lesson-20',
          title: 'The Customer Buying Journey',
          duration: '15 min',
          content: [
            { type: 'paragraph', value: 'Customers often move through several stages before making a purchase.' },
            { type: 'heading', level: 3, value: 'Journey stages' },
            { type: 'orderedList', items: ['Awareness', 'Interest', 'Consideration', 'Decision', 'Purchase', 'Experience', 'Loyalty'] }
          ]
        },
        {
          id: 'lesson-21',
          title: 'Emotional Intelligence in Marketing',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Emotional intelligence is the ability to recognize, understand, and manage emotions—both your own and those of others.' },
            { type: 'heading', level: 3, value: 'What it helps with' },
            { type: 'list', items: ['Listening carefully.', 'Showing empathy.', 'Remaining calm during difficult conversations.', 'Building meaningful relationships.'] }
          ]
        },
        {
          id: 'lesson-22',
          title: 'Handling Customer Objections',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'Objections are normal in marketing. They often reflect uncertainty, concern, or a need for more information.' },
            { type: 'heading', level: 3, value: 'Professional responses' },
            { type: 'list', items: ['Listen without interrupting.', 'Ask clarifying questions.', 'Provide accurate information.', 'Respect the customer’s decision.', 'Offer to follow up later if appropriate.'] }
          ]
        },
        {
          id: 'lesson-23',
          title: 'Building Long-Term Relationships',
          duration: '15 min',
          content: [
            { type: 'paragraph', value: 'The goal of marketing is not just to make one sale but to create lasting customer relationships.' },
            { type: 'heading', level: 3, value: 'Relationship habits' },
            { type: 'list', items: ['Follow up after purchases.', 'Request feedback.', 'Solve problems promptly.', 'Share useful information.', 'Reward loyal customers.', 'Respect customer privacy.'] }
          ]
        },
        {
          id: 'lesson-24',
          title: 'Case Study and Practical Activities',
          duration: '18 min',
          content: [
            { type: 'paragraph', value: 'In this module, students can reflect on how a marketing specialist who listens carefully and understands customer needs is more likely to build trust and encourage referrals.' },
            { type: 'heading', level: 3, value: 'Activities' },
            { type: 'list', items: ['Interview three people and ask what influenced their recent purchase.', 'Choose a product or service and describe its target customers and trust-building strategies.', 'Create customer profiles for fictional buyers and compare how you would market to each.'] }
          ]
        }
      ]
    },

    // Module 4: Sales Psychology and Ethical Persuasion
    {
      id: 'module-4',
      title: 'Module 4: Sales Psychology and Ethical Persuasion',
      lessons: [
        {
          id: 'lesson-25',
          title: 'Understanding Sales Psychology',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'Sales psychology is the study of how people think and behave before making a purchase.' },
            { type: 'heading', level: 3, value: 'People usually buy when they believe a product will' },
            { type: 'list', items: ['Solve a problem.', 'Save time.', 'Save money.', 'Reduce stress.', 'Increase income.', 'Improve productivity.', 'Improve convenience.', 'Help them achieve personal or business goals.'] }
          ]
        },
        {
          id: 'lesson-26',
          title: 'Persuasion vs. Manipulation',
          duration: '15 min',
          content: [
            { type: 'paragraph', value: 'Ethical persuasion means helping customers make informed decisions by providing truthful information and demonstrating value.' },
            { type: 'heading', level: 3, value: 'Ethical persuasion' },
            { type: 'list', items: ['Explaining product benefits honestly.', 'Answering questions accurately.', 'Respecting the customer’s choice.', 'Recommending the best solution, even if it is not the most expensive option.'] }
          ]
        },
        {
          id: 'lesson-27',
          title: 'Building Confidence in Sales',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Confidence comes from preparation, not from pretending to know everything.' },
            { type: 'heading', level: 3, value: 'How to build confidence' },
            { type: 'list', items: ['Learn your product thoroughly.', 'Understand your customers.', 'Practice conversations.', 'Expect objections.', 'Learn from rejection.', 'Keep improving your skills.'] }
          ]
        },
        {
          id: 'lesson-28',
          title: 'Understanding Customer Objections',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'An objection is a concern or question that prevents a customer from buying immediately.' },
            { type: 'heading', level: 3, value: 'Common objections' },
            { type: 'list', items: ['The price is too high.', 'I need to think about it.', 'I already use another product.', 'I do not have time.', 'I need approval from my manager.', 'I am not convinced it will work.'] }
          ]
        },
        {
          id: 'lesson-29',
          title: 'Responding to Objections',
          duration: '16 min',
          content: [
            { type: 'paragraph', value: 'A simple four-step approach helps you handle objections professionally.' },
            { type: 'heading', level: 3, value: 'Four-step approach' },
            { type: 'orderedList', items: ['Listen', 'Acknowledge', 'Clarify', 'Respond'] }
          ]
        },
        {
          id: 'lesson-30',
          title: 'Presenting Value Instead of Features',
          duration: '12 min',
          content: [
            { type: 'paragraph', value: 'Customers are usually more interested in benefits than technical details.' },
            { type: 'heading', level: 3, value: 'Example' },
            { type: 'paragraph', value: 'Feature: The software stores customer records. Benefit: You can quickly find customer information, reducing paperwork and saving time.' }
          ]
        },
        {
          id: 'lesson-31',
          title: 'Ethical Closing Techniques',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Closing means asking whether the customer is ready to move forward.' },
            { type: 'heading', level: 3, value: 'Examples' },
            { type: 'list', items: ['Would you like to begin with the basic plan or the premium plan?', 'Would you like me to help you create your account today?', 'Do you have any remaining questions before making your decision?'] }
          ]
        },
        {
          id: 'lesson-32',
          title: 'The Importance of Follow-Up',
          duration: '12 min',
          content: [
            { type: 'paragraph', value: 'Many sales occur after several conversations.' },
            { type: 'heading', level: 3, value: 'Professional follow-up' },
            { type: 'list', items: ['Thank the customer.', 'Answer additional questions.', 'Share helpful information.', 'Check whether they need further assistance.'] }
          ]
        },
        {
          id: 'lesson-33',
          title: 'Building Long-Term Relationships',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'Successful businesses grow through repeat customers and referrals.' },
            { type: 'heading', level: 3, value: 'Ways to strengthen relationships' },
            { type: 'list', items: ['Keep promises.', 'Deliver quality service.', 'Stay in touch.', 'Ask for feedback.', 'Resolve problems quickly.', 'Celebrate customer successes.'] }
          ]
        },
        {
          id: 'lesson-34',
          title: 'Handling Rejection Positively',
          duration: '12 min',
          content: [
            { type: 'paragraph', value: 'Every marketer experiences rejection, and it should be treated as feedback rather than failure.' },
            { type: 'heading', level: 3, value: 'Helpful questions' },
            { type: 'list', items: ['What can I learn?', 'Did I understand the customer’s needs?', 'Was my explanation clear?', 'Is this customer simply not ready yet?'] }
          ]
        },
        {
          id: 'lesson-35',
          title: 'Case Study and Activities',
          duration: '18 min',
          content: [
            { type: 'paragraph', value: 'A marketing specialist who focuses on solving the customer’s problem rather than maximizing revenue often builds stronger trust and achieves a lasting sale.' },
            { type: 'heading', level: 3, value: 'Activities' },
            { type: 'list', items: ['Role-play a customer conversation with at least two objections.', 'Take one Zentrix product and list features, benefits, objections, and responses.', 'Write a reflection on why ethical persuasion creates stronger relationships than manipulation.'] }
          ]
        }
      ]
    },

    // Module 5: Relationship Marketing and Organic Marketing
    {
      id: 'module-5',
      title: 'Module 5: Relationship Marketing and Organic Marketing',
      lessons: [
        {
          id: 'lesson-36',
          title: 'What Is Relationship Marketing?',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'Relationship marketing focuses on creating long-term relationships rather than one-time sales.' },
            { type: 'heading', level: 3, value: 'Its goals are to' },
            { type: 'list', items: ['Build trust.', 'Deliver value.', 'Encourage repeat business.', 'Earn referrals.', 'Create loyal customers.'] }
          ]
        },
        {
          id: 'lesson-37',
          title: 'What Is Organic Marketing?',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Organic marketing is the practice of growing customers naturally through trust, education, helpful content, conversations, and recommendations.' },
            { type: 'heading', level: 3, value: 'Examples' },
            { type: 'list', items: ['Talking to friends about a useful solution.', 'Answering questions in online communities.', 'Sharing educational posts on social media.', 'Recommending products you genuinely believe in.', 'Encouraging satisfied customers to refer others.'] }
          ]
        },
        {
          id: 'lesson-38',
          title: 'Your Relationship Network',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'Every marketing specialist already has a network of personal and professional relationships.' },
            { type: 'heading', level: 3, value: 'Possible connections' },
            { type: 'list', items: ['Family members.', 'Friends.', 'Neighbours.', 'Classmates.', 'Colleagues.', 'Community members.', 'Existing customers.', 'Social media contacts.'] }
          ]
        },
        {
          id: 'lesson-39',
          title: 'The Trust Formula',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Trust is earned through consistent behaviour and ethical conduct.' },
            { type: 'heading', level: 3, value: 'Customers trust marketers who' },
            { type: 'list', items: ['Tell the truth.', 'Keep promises.', 'Respect privacy.', 'Listen carefully.', 'Respond promptly.', 'Admit mistakes.', 'Continue helping after the sale.'] }
          ]
        },
        {
          id: 'lesson-40',
          title: 'Providing Value Before Selling',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'One of the best ways to build relationships is to help people before asking them to buy.' },
            { type: 'heading', level: 3, value: 'Examples' },
            { type: 'list', items: ['Sharing useful business tips.', 'Teaching customers how to solve common problems.', 'Recommending free resources.', 'Offering demonstrations.', 'Answering questions honestly.'] }
          ]
        },
        {
          id: 'lesson-41',
          title: 'Referral Marketing',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Happy customers often become your best marketers.' },
            { type: 'heading', level: 3, value: 'Ways to encourage referrals' },
            { type: 'list', items: ['Deliver excellent service.', 'Ask satisfied customers if they know someone who could also benefit.', 'Thank customers for referrals.', 'Maintain relationships after the sale.'] }
          ]
        },
        {
          id: 'lesson-42',
          title: 'Personal Branding',
          duration: '12 min',
          content: [
            { type: 'paragraph', value: 'A personal brand is how people perceive you.' },
            { type: 'heading', level: 3, value: 'Professional marketers should be known for' },
            { type: 'list', items: ['Honesty.', 'Reliability.', 'Knowledge.', 'Respect.', 'Professional communication.', 'Willingness to help.'] }
          ]
        },
        {
          id: 'lesson-43',
          title: 'Networking Skills',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Networking is the process of building genuine professional relationships.' },
            { type: 'heading', level: 3, value: 'Good networking habits' },
            { type: 'list', items: ['Introducing yourself confidently.', 'Asking about other people’s work.', 'Listening more than talking.', 'Exchanging contact information with permission.', 'Following up after meeting someone.', 'Looking for opportunities to help others.'] }
          ]
        },
        {
          id: 'lesson-44',
          title: 'Community Marketing',
          duration: '12 min',
          content: [
            { type: 'paragraph', value: 'Communities provide opportunities to educate and support people.' },
            { type: 'heading', level: 3, value: 'Examples' },
            { type: 'list', items: ['Professional associations.', 'Alumni groups.', 'Business networking events.', 'Religious organizations.', 'Local community groups.', 'Online forums.', 'Industry conferences.'] }
          ]
        },
        {
          id: 'lesson-45',
          title: 'Ethical Social Sharing',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'When sharing marketing content online, focus on education, professionalism, and helpfulness.' },
            { type: 'heading', level: 3, value: 'Do' },
            { type: 'list', items: ['Share educational information.', 'Post success stories with permission.', 'Celebrate customer achievements.', 'Answer questions helpfully.', 'Maintain professionalism.'] }
          ]
        },
        {
          id: 'lesson-46',
          title: 'Maintaining Long-Term Relationships',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'After making a sale, continue to support the customer and maintain the relationship.' },
            { type: 'heading', level: 3, value: 'Helpful habits' },
            { type: 'list', items: ['Thank the customer.', 'Ask whether they need assistance.', 'Share updates that may benefit them.', 'Request feedback.', 'Celebrate milestones.', 'Keep in touch periodically.'] }
          ]
        },
        {
          id: 'lesson-47',
          title: 'Common Mistakes in Organic Marketing',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'Avoid contacting people only when you want to sell something or damaging relationships for short-term sales.' },
            { type: 'heading', level: 3, value: 'Avoid' },
            { type: 'list', items: ['Sending the same promotional message to everyone.', 'Ignoring customer questions.', 'Failing to follow up.', 'Over-promising.', 'Arguing with customers.', 'Damaging relationships for short-term gain.'] }
          ]
        },
        {
          id: 'lesson-48',
          title: 'Case Study and Practical Activities',
          duration: '18 min',
          content: [
            { type: 'paragraph', value: 'A specialist who shares useful business tips before introducing a product can build trust and create a stronger path to future sales.' },
            { type: 'heading', level: 3, value: 'Activities' },
            { type: 'list', items: ['Create a relationship map with at least 50 people you know.', 'Write three educational social media posts that teach something useful without directly asking for a sale.', 'Develop a personal brand plan for the next six months.'] }
          ]
        }
      ]
    },

    // Module 6: Social Media Marketing
    {
      id: 'module-6',
      title: 'Module 6: Social Media Marketing',
      lessons: [
        {
          id: 'lesson-49',
          title: 'What Is Social Media Marketing?',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'Social media marketing is the use of social media platforms to build awareness, engage with audiences, promote products or services, and develop lasting customer relationships.' },
            { type: 'heading', level: 3, value: 'Objectives' },
            { type: 'list', items: ['Building brand awareness.', 'Educating potential customers.', 'Generating leads.', 'Supporting customers.', 'Encouraging referrals.', 'Building a loyal community.'] }
          ]
        },
        {
          id: 'lesson-50',
          title: 'Understanding Social Media Platforms',
          duration: '16 min',
          content: [
            { type: 'paragraph', value: 'Different platforms serve different purposes, so choosing the right one depends on where your audience spends time.' },
            { type: 'heading', level: 3, value: 'Common platforms' },
            { type: 'list', items: ['Facebook: community building and local business engagement.', 'Instagram: photos, videos, and lifestyle content.', 'LinkedIn: professional networking and B2B marketing.', 'TikTok: short educational and entertaining videos.', 'YouTube: tutorials, demonstrations, and long-form content.', 'WhatsApp: customer communication and support.', 'Telegram: communities and updates.', 'X: industry conversations and brand engagement.'] }
          ]
        },
        {
          id: 'lesson-51',
          title: 'Creating a Professional Profile',
          duration: '12 min',
          content: [
            { type: 'paragraph', value: 'A professional profile should include a clear photo, a strong bio, contact details, and consistent branding.' },
            { type: 'heading', level: 3, value: 'Key profile elements' },
            { type: 'list', items: ['Clear profile photo.', 'Professional bio.', 'Contact information.', 'Website link.', 'Company information.', 'Consistent branding.'] }
          ]
        },
        {
          id: 'lesson-52',
          title: 'Understanding Your Target Audience',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Before posting content, understand the audience’s age, occupation, interests, location, and preferred platforms.' },
            { type: 'heading', level: 3, value: 'Questions to ask' },
            { type: 'list', items: ['Who are they?', 'What problems do they want to solve?', 'Which platforms do they use?', 'What content format do they prefer?'] }
          ]
        },
        {
          id: 'lesson-53',
          title: 'Types of Social Media Content',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'A balanced content strategy includes educational, inspirational, entertaining, product, and customer-success content.' },
            { type: 'heading', level: 3, value: 'Content types' },
            { type: 'list', items: ['Educational content.', 'Inspirational content.', 'Entertaining content.', 'Product content.', 'Customer success stories.', 'Behind-the-scenes content.', 'FAQ content.'] }
          ]
        },
        {
          id: 'lesson-54',
          title: 'The 80/20 Content Rule',
          duration: '12 min',
          content: [
            { type: 'paragraph', value: 'A helpful guideline is that 80% of content should educate, entertain, or build relationships, while 20% should be promotional.' },
            { type: 'heading', level: 3, value: 'Why this matters' },
            { type: 'paragraph', value: 'People follow pages because they gain value, not because they want constant advertisements.' }
          ]
        },
        {
          id: 'lesson-55',
          title: 'Creating Engaging Content',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Effective content should solve a problem, be easy to understand, use clear language, and invite conversation.' },
            { type: 'heading', level: 3, value: 'Helpful habits' },
            { type: 'list', items: ['Use simple language.', 'Include visuals where appropriate.', 'End with a question or invitation to comment.', 'Encourage meaningful conversations.'] }
          ]
        },
        {
          id: 'lesson-56',
          title: 'Short Video Marketing',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Short videos are highly effective on many social platforms.' },
            { type: 'heading', level: 3, value: 'Video ideas' },
            { type: 'list', items: ['Product demonstrations.', 'Business tips.', 'Customer testimonials.', 'Frequently asked questions.', 'Common mistakes to avoid.', 'Success stories.'] }
          ]
        },
        {
          id: 'lesson-57',
          title: 'Building an Online Community',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'Successful marketers build communities rather than simply collecting followers.' },
            { type: 'heading', level: 3, value: 'Community-building habits' },
            { type: 'list', items: ['Respond to comments.', 'Answer questions.', 'Acknowledge feedback.', 'Encourage discussions.', 'Celebrate customer achievements.', 'Host live sessions.'] }
          ]
        },
        {
          id: 'lesson-58',
          title: 'Generating Leads Through Social Media',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'Lead generation involves identifying people who may be interested in your products or services.' },
            { type: 'heading', level: 3, value: 'Ethical lead-generation methods' },
            { type: 'list', items: ['Offer free resources.', 'Invite people to webinars.', 'Share educational content.', 'Provide demonstrations.', 'Encourage newsletter subscriptions.', 'Offer free consultations where appropriate.'] }
          ]
        },
        {
          id: 'lesson-59',
          title: 'Social Media Etiquette',
          duration: '12 min',
          content: [
            { type: 'paragraph', value: 'Professional marketers should be respectful, polite, and mindful of privacy and cultural differences.' },
            { type: 'heading', level: 3, value: 'Principles' },
            { type: 'list', items: ['Be respectful.', 'Avoid arguments.', 'Respond politely.', 'Admit mistakes.', 'Protect customer privacy.', 'Credit original creators.'] }
          ]
        },
        {
          id: 'lesson-60',
          title: 'Measuring Success',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Monitor your performance regularly to improve results.' },
            { type: 'heading', level: 3, value: 'Important metrics' },
            { type: 'list', items: ['Reach.', 'Impressions.', 'Engagement.', 'Comments.', 'Shares.', 'Saves.', 'Website visits.', 'Leads generated.', 'Customer inquiries.', 'Sales influenced.'] }
          ]
        },
        {
          id: 'lesson-61',
          title: 'Case Study and Practical Activities',
          duration: '18 min',
          content: [
            { type: 'paragraph', value: 'A school management application can gain trust through educational videos and helpful content rather than constant advertising.' },
            { type: 'heading', level: 3, value: 'Activities' },
            { type: 'list', items: ['Create a one-week social media content calendar.', 'Write three LinkedIn posts introducing a Zentrix solution without directly asking for a sale.', 'Design a one-month content strategy for a chosen platform.'] }
          ]
        }
      ]
    },

    // Module 7: Digital Marketing Fundamentals
    {
      id: 'module-7',
      title: 'Module 7: Digital Marketing Fundamentals',
      lessons: [
        {
          id: 'lesson-62',
          title: 'Module Overview',
          duration: '12 min',
          content: [
            { type: 'paragraph', value: 'This module introduces digital marketing as a modern, measurable, and highly connected method for attracting, engaging, and converting customers online.' },
            { type: 'heading', level: 3, value: 'Course level' },
            { type: 'paragraph', value: 'Intermediate to Advanced' },
            { type: 'heading', level: 3, value: 'Estimated duration' },
            { type: 'paragraph', value: '15-18 hours' },
            { type: 'heading', level: 3, value: 'Learning objectives' },
            { type: 'list', items: ['Explain what digital marketing is and how it differs from traditional marketing.', 'Understand the customer journey in the digital environment.', 'Use websites and landing pages to generate leads.', 'Understand Search Engine Optimization (SEO).', 'Create effective email marketing campaigns.', 'Understand affiliate and referral marketing.', 'Learn the basics of online advertising.', 'Measure marketing performance using analytics.', 'Use AI tools responsibly to improve productivity.', 'Develop an integrated digital marketing strategy.'] }
          ]
        },
        {
          id: 'lesson-63',
          title: 'What Is Digital Marketing?',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'Digital marketing is the promotion of products or services using digital technologies and online platforms such as websites, search engines, social media, email, mobile apps, messaging tools, and video platforms.' },
            { type: 'heading', level: 3, value: 'Examples' },
            { type: 'list', items: ['Websites.', 'Search engines.', 'Email.', 'Social media.', 'Online advertising.', 'Mobile apps.', 'Video platforms.'] }
          ]
        },
        {
          id: 'lesson-64',
          title: 'Traditional Marketing vs. Digital Marketing',
          duration: '15 min',
          content: [
            { type: 'paragraph', value: 'Traditional marketing uses channels such as newspapers, radio, television, billboards, flyers, and trade fairs, while digital marketing reaches people through online platforms and data-driven campaigns.' },
            { type: 'heading', level: 3, value: 'Benefits of digital marketing' },
            { type: 'list', items: ['Global reach.', 'Lower cost.', 'Better audience targeting.', 'Real-time results tracking.', 'Better customer engagement.'] }
          ]
        },
        {
          id: 'lesson-65',
          title: 'The Digital Customer Journey',
          duration: '15 min',
          content: [
            { type: 'paragraph', value: 'A customer usually moves through several stages before buying, including awareness, interest, consideration, decision, purchase, retention, and advocacy.' },
            { type: 'heading', level: 3, value: 'Journey stages' },
            { type: 'orderedList', items: ['Awareness', 'Interest', 'Consideration', 'Decision', 'Purchase', 'Retention', 'Advocacy'] }
          ]
        },
        {
          id: 'lesson-66',
          title: 'Business Websites',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'A website is the digital headquarters of a business and should make it easy for visitors to understand the company, its products, and the next step to take.' },
            { type: 'heading', level: 3, value: 'Essential website elements' },
            { type: 'list', items: ['Homepage.', 'About page.', 'Products and services.', 'Contact details.', 'FAQ section.', 'Testimonials.', 'Privacy policy.', 'Clear call-to-action.'] }
          ]
        },
        {
          id: 'lesson-67',
          title: 'Landing Pages',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'A landing page is built around one goal, such as collecting leads, registering a user, booking a consultation, or driving a sale.' },
            { type: 'heading', level: 3, value: 'Principles of a strong landing page' },
            { type: 'list', items: ['Compelling headline.', 'Clear benefits.', 'Customer testimonials.', 'Simple registration form.', 'Strong call-to-action.', 'Minimal distractions.'] }
          ]
        },
        {
          id: 'lesson-68',
          title: 'Search Engine Optimization (SEO)',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'SEO improves a website’s visibility in search engine results so it can attract more visitors without paying for every click.' },
            { type: 'heading', level: 3, value: 'Basic SEO practices' },
            { type: 'list', items: ['Write useful content.', 'Use relevant keywords naturally.', 'Create descriptive page titles.', 'Improve load speed.', 'Keep the site mobile friendly.', 'Use clear headings.', 'Earn quality backlinks.'] }
          ]
        },
        {
          id: 'lesson-69',
          title: 'Email Marketing',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Email marketing remains effective because it allows businesses to deliver timely, relevant messages directly to people who have shown interest.' },
            { type: 'heading', level: 3, value: 'Common email uses' },
            { type: 'list', items: ['Welcome new customers.', 'Share educational content.', 'Announce new products.', 'Send newsletters.', 'Follow up after purchases.', 'Build loyalty.'] }
          ]
        },
        {
          id: 'lesson-70',
          title: 'Affiliate and Referral Marketing',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Affiliate marketing rewards promoters for successful referrals, while referral marketing relies on satisfied customers recommending products to people they know.' },
            { type: 'heading', level: 3, value: 'Why they work' },
            { type: 'list', items: ['They build trust through personal recommendation.', 'They often reach people with genuine interest.', 'They can grow a business ethically when promises are kept.'] }
          ]
        },
        {
          id: 'lesson-71',
          title: 'Online Advertising',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'Online advertising allows businesses to target specific groups of people quickly through search, social media, video, and other digital channels.' },
            { type: 'heading', level: 3, value: 'Common platforms' },
            { type: 'list', items: ['Google Ads.', 'Facebook Ads.', 'Instagram Ads.', 'LinkedIn Ads.', 'YouTube Ads.'] }
          ]
        },
        {
          id: 'lesson-72',
          title: 'Analytics and Performance Measurement',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'One of the biggest advantages of digital marketing is the ability to measure performance in real time and adjust campaigns based on data.' },
            { type: 'heading', level: 3, value: 'Useful metrics' },
            { type: 'list', items: ['Website visitors.', 'Page views.', 'Conversion rate.', 'Email open rate.', 'Click-through rate.', 'Cost per lead.', 'Customer acquisition cost.', 'Return on investment.'] }
          ]
        },
        {
          id: 'lesson-73',
          title: 'Artificial Intelligence in Marketing',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'AI tools can help marketers generate ideas, draft messages, create visuals, analyze data, personalize experiences, and translate content more quickly.' },
            { type: 'heading', level: 3, value: 'Responsible use' },
            { type: 'list', items: ['Use AI to increase productivity.', 'Review content for accuracy.', 'Keep human judgment in the loop.', 'Protect customer trust and privacy.'] }
          ]
        },
        {
          id: 'lesson-74',
          title: 'Building an Integrated Digital Marketing Strategy',
          duration: '15 min',
          content: [
            { type: 'paragraph', value: 'A strong digital marketing strategy combines several channels so that each one supports the others and builds a more complete customer experience.' },
            { type: 'heading', level: 3, value: 'Example flow' },
            { type: 'orderedList', items: ['Publish helpful blog articles.', 'Share them on social media.', 'Collect emails with permission.', 'Send valuable newsletters.', 'Invite prospects to a product demo.', 'Follow up with interested leads.', 'Support customers after purchase.'] }
          ]
        },
        {
          id: 'lesson-75',
          title: 'Practical Activities, Assignments, and Key Takeaways',
          duration: '18 min',
          content: [
            { type: 'paragraph', value: 'Students should evaluate three business websites, outline a landing page for a Zentrix product, and build a digital marketing strategy that includes target audience, channels, lead generation, email plans, and success measurements.' },
            { type: 'heading', level: 3, value: 'Discussion questions' },
            { type: 'list', items: ['Why has digital marketing become so important?', 'How does SEO benefit businesses over the long term?', 'Why is email marketing still valuable?', 'How can AI improve marketing without replacing marketers?', 'Why should businesses measure marketing performance?'] },
            { type: 'heading', level: 3, value: 'Key takeaways' },
            { type: 'list', items: ['Digital marketing combines multiple online channels to reach customers.', 'A website serves as the foundation of a company’s online presence.', 'SEO helps attract visitors through search engines.', 'Email marketing strengthens customer relationships.', 'Analytics help marketers make informed decisions.', 'AI increases efficiency but should be used responsibly.', 'Integrated strategies produce stronger results than isolated activities.'] }
          ]
        }
      ]
    },

    // Module 8: Content Marketing and Copywriting
    {
      id: 'module-8',
      title: 'Module 8: Content Marketing and Copywriting',
      lessons: [
        {
          id: 'lesson-76',
          title: 'Module Overview',
          duration: '12 min',
          content: [
            { type: 'paragraph', value: 'This module introduces content marketing as a powerful way to educate audiences, build trust, and create business opportunities before making a direct sales pitch.' },
            { type: 'heading', level: 3, value: 'Course level' },
            { type: 'paragraph', value: 'Intermediate to Advanced' },
            { type: 'heading', level: 3, value: 'Estimated duration' },
            { type: 'paragraph', value: '15-20 hours' },
            { type: 'heading', level: 3, value: 'Learning objectives' },
            { type: 'list', items: ['Understand the principles of content marketing.', 'Explain the difference between content marketing and advertising.', 'Create valuable content that educates and builds trust.', 'Write persuasive marketing copy ethically.', 'Develop a content strategy for different audiences.', 'Create content for websites, blogs, emails, social media, and videos.', 'Write effective calls to action (CTAs).', 'Measure content performance and improve future content.'] }
          ]
        },
        {
          id: 'lesson-77',
          title: 'What Is Content Marketing?',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'Content marketing is the process of creating and sharing valuable, relevant, and consistent content to attract and retain a clearly defined audience.' },
            { type: 'heading', level: 3, value: 'Its goal' },
            { type: 'list', items: ['Educate.', 'Solve problems.', 'Answer questions.', 'Build trust.'] }
          ]
        },
        {
          id: 'lesson-78',
          title: 'Content Marketing vs. Advertising',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'Content marketing focuses on education, problem-solving, and long-term relationships, while advertising focuses on promoting products or services to encourage immediate action.' },
            { type: 'heading', level: 3, value: 'Examples' },
            { type: 'list', items: ['Content marketing: 10 Ways Schools Can Improve Student Attendance.', 'Advertising: Register for the Zentrix School Management System Today.'] }
          ]
        },
        {
          id: 'lesson-79',
          title: 'Understanding Your Audience',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Before creating content, marketers should understand who the audience is, what problems they face, what questions they ask, and what information would genuinely help them.' },
            { type: 'heading', level: 3, value: 'Questions to ask' },
            { type: 'list', items: ['Who is my audience?', 'What problems do they face?', 'What questions do they ask?', 'What content do they prefer?'] }
          ]
        },
        {
          id: 'lesson-80',
          title: 'Types of Marketing Content',
          duration: '15 min',
          content: [
            { type: 'paragraph', value: 'A marketer should be able to create different types of content suited to different audiences and platforms.' },
            { type: 'heading', level: 3, value: 'Examples' },
            { type: 'list', items: ['Blog articles.', 'Social media posts.', 'Short videos.', 'Educational videos.', 'Infographics.', 'Email newsletters.', 'Customer success stories.', 'Product demonstrations.', 'Case studies.', 'FAQs.', 'Checklists.', 'Guides and eBooks.', 'Webinars.'] }
          ]
        },
        {
          id: 'lesson-81',
          title: 'The AIDA Model',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'AIDA is a simple framework for writing persuasive marketing copy: Attention, Interest, Desire, and Action.' },
            { type: 'heading', level: 3, value: 'Example' },
            { type: 'orderedList', items: ['Attention: Still spending hours on school administration?', 'Interest: Many schools lose valuable time using manual records.', 'Desire: Our software helps schools manage attendance, fees, and reports efficiently.', 'Action: Book a free demonstration today.'] }
          ]
        },
        {
          id: 'lesson-82',
          title: 'Writing Powerful Headlines',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'A headline determines whether people continue reading, so it should be clear, specific, relevant, benefit-focused, and honest.' },
            { type: 'heading', level: 3, value: 'Examples' },
            { type: 'list', items: ['7 Ways to Grow Your Small Business with Technology.', 'How Schools Can Save Time with Digital Administration.', 'Why Customer Service Matters More Than Price.'] }
          ]
        },
        {
          id: 'lesson-83',
          title: 'Writing Effective Marketing Copy',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'Good copy should be easy to understand, focus on customer benefits, use short paragraphs, include real examples, avoid unnecessary jargon, stay honest, and end with a clear call to action.' },
            { type: 'heading', level: 3, value: 'Remember' },
            { type: 'paragraph', value: 'Customers care more about how your solution helps them than about technical specifications.' }
          ]
        },
        {
          id: 'lesson-84',
          title: 'Storytelling in Marketing',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Stories create emotional connections and make products memorable by showing a relatable problem, a solution, and a positive outcome.' },
            { type: 'heading', level: 3, value: 'Example' },
            { type: 'paragraph', value: 'A school administrator spent hours preparing attendance reports each week. After adopting the Zentrix School Management System, reporting time was reduced significantly, allowing more focus on supporting teachers and students.' }
          ]
        },
        {
          id: 'lesson-85',
          title: 'Calls to Action (CTAs)',
          duration: '12 min',
          content: [
            { type: 'paragraph', value: 'A call to action tells the audience exactly what to do next, such as downloading a guide, registering, contacting a team, booking a consultation, or starting a free trial.' },
            { type: 'heading', level: 3, value: 'Examples' },
            { type: 'list', items: ['Download the guide.', 'Register today.', 'Contact our team.', 'Book a free consultation.', 'Learn more.', 'Start your free trial.'] }
          ]
        },
        {
          id: 'lesson-86',
          title: 'Video Content Marketing',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Video is one of the most effective content formats because it is visual, engaging, and easy to share.' },
            { type: 'heading', level: 3, value: 'Video ideas' },
            { type: 'list', items: ['Product demonstrations.', 'Tutorials.', 'FAQs.', 'Customer testimonials.', 'Behind-the-scenes videos.', 'Live Q&A sessions.', 'Educational tips.'] }
          ]
        },
        {
          id: 'lesson-87',
          title: 'Content Planning',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Professional marketers plan content in advance to maintain consistency and align each piece with a clear objective.' },
            { type: 'heading', level: 3, value: 'A content calendar should include' },
            { type: 'list', items: ['Publication date.', 'Platform.', 'Topic.', 'Target audience.', 'Content format.', 'Objective.', 'Call to action.'] }
          ]
        },
        {
          id: 'lesson-88',
          title: 'Measuring Content Performance',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Useful metrics help marketers identify what resonates with their audience and improve future content.' },
            { type: 'heading', level: 3, value: 'Metrics to track' },
            { type: 'list', items: ['Views.', 'Shares.', 'Comments.', 'Likes.', 'Saves.', 'Click-through rate.', 'Website visits.', 'Email sign-ups.', 'Leads generated.', 'Customer inquiries.'] }
          ]
        },
        {
          id: 'lesson-89',
          title: 'Practical Activities, Assignments, and Key Takeaways',
          duration: '18 min',
          content: [
            { type: 'paragraph', value: 'Students should write educational blog content, create platform-specific social posts, develop headline ideas, create a one-month content calendar, and reflect on why consistency and value build trust.' },
            { type: 'heading', level: 3, value: 'Discussion questions' },
            { type: 'list', items: ['Why does educational content build trust?', 'How does storytelling influence buying decisions?', 'Why are headlines important?', 'What makes a strong call to action?', 'Why should businesses publish content consistently?'] },
            { type: 'heading', level: 3, value: 'Key takeaways' },
            { type: 'list', items: ['Content marketing educates before selling.', 'Valuable content builds trust and credibility.', 'Good copy focuses on customer benefits.', 'Storytelling creates emotional connections.', 'Headlines determine whether content gets attention.', 'Every piece of content should have a clear objective.', 'Content performance should be measured and improved continuously.'] }
          ]
        }
      ]
    },

    // Module 9: Lead Generation, Prospecting, and Customer Acquisition
    {
      id: 'module-9',
      title: 'Module 9: Lead Generation, Prospecting, and Customer Acquisition',
      lessons: [
        {
          id: 'lesson-90',
          title: 'Module Overview',
          duration: '12 min',
          content: [
            { type: 'paragraph', value: 'This module explains how businesses find potential customers, qualify them, build relationships, and turn interest into long-term loyalty.' },
            { type: 'heading', level: 3, value: 'Course level' },
            { type: 'paragraph', value: 'Advanced' },
            { type: 'heading', level: 3, value: 'Estimated duration' },
            { type: 'paragraph', value: '15-18 hours' },
            { type: 'heading', level: 3, value: 'Learning objectives' },
            { type: 'list', items: ['Understand what a lead is.', 'Differentiate between prospects, leads, customers, and loyal customers.', 'Generate qualified leads using ethical methods.', 'Build and manage a sales pipeline.', 'Qualify potential customers.', 'Conduct effective follow-up.', 'Convert prospects into customers.', 'Measure customer acquisition performance.'] }
          ]
        },
        {
          id: 'lesson-91',
          title: 'What Is a Lead?',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'A lead is a person or organization that has shown interest in a product or service.' },
            { type: 'heading', level: 3, value: 'Examples' },
            { type: 'list', items: ['Someone who downloads a free guide.', 'Someone who requests a product demonstration.', 'Someone who fills out a contact form.', 'Someone who sends a WhatsApp inquiry.', 'Someone who attends a webinar.'] }
          ]
        },
        {
          id: 'lesson-92',
          title: 'Understanding the Customer Journey',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'The customer journey moves from being a stranger to eventually becoming a loyal brand advocate.' },
            { type: 'heading', level: 3, value: 'Journey stages' },
            { type: 'orderedList', items: ['Stranger', 'Visitor', 'Lead', 'Qualified Lead', 'Prospect', 'Customer', 'Repeat Customer', 'Loyal Customer', 'Brand Advocate'] }
          ]
        },
        {
          id: 'lesson-93',
          title: 'Sources of Leads',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'Potential customers can come from online and offline sources, and strong marketers often combine several sources instead of relying on one.' },
            { type: 'heading', level: 3, value: 'Examples' },
            { type: 'list', items: ['Company website.', 'Social media.', 'Search engines.', 'Email campaigns.', 'Webinars.', 'Online communities.', 'Referral links.', 'Networking events.', 'Business meetings.', 'Trade fairs.', 'Conferences.', 'Community associations.', 'Schools.', 'Religious organizations.', 'Existing customers.'] }
          ]
        },
        {
          id: 'lesson-94',
          title: 'Prospecting',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Prospecting is the process of identifying people or organizations that may benefit from your product or service.' },
            { type: 'heading', level: 3, value: 'Good prospecting includes' },
            { type: 'list', items: ['Researching potential customers.', 'Understanding their challenges.', 'Determining whether your solution is a fit.', 'Preparing before making contact.'] }
          ]
        },
        {
          id: 'lesson-95',
          title: 'Qualifying Leads',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Not every lead is ready to buy, so marketers use qualification criteria to focus on the opportunities that are most likely to become customers.' },
            { type: 'heading', level: 3, value: 'Questions to ask' },
            { type: 'list', items: ['Do they have a genuine need?', 'Are they interested?', 'Can they make purchasing decisions?', 'Is this the right time?', 'Does the product fit their situation?'] }
          ]
        },
        {
          id: 'lesson-96',
          title: 'Building a Sales Pipeline',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'A sales pipeline is a structured process for tracking potential customers from first contact toward a sale and beyond.' },
            { type: 'heading', level: 3, value: 'Example stages' },
            { type: 'orderedList', items: ['New Lead', 'First Contact', 'Needs Assessment', 'Product Demonstration', 'Proposal', 'Follow-up', 'Decision', 'Customer', 'After-Sales Support'] }
          ]
        },
        {
          id: 'lesson-97',
          title: 'Customer Follow-Up',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Many sales happen after several conversations, which is why follow-up should be timely, helpful, respectful, and value-adding.' },
            { type: 'heading', level: 3, value: 'Examples' },
            { type: 'list', items: ['Sending useful information.', 'Scheduling another meeting.', 'Sharing relevant case studies.', 'Checking whether further assistance is needed.'] }
          ]
        },
        {
          id: 'lesson-98',
          title: 'Customer Acquisition',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Customer acquisition is the process of turning interested prospects into paying customers while building trust and demonstrating value.' },
            { type: 'heading', level: 3, value: 'Effective acquisition focuses on' },
            { type: 'list', items: ['Understanding needs.', 'Building trust.', 'Providing accurate information.', 'Demonstrating value.', 'Addressing concerns.', 'Supporting customers after purchase.'] }
          ]
        },
        {
          id: 'lesson-99',
          title: 'Customer Retention',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Keeping an existing customer is often less expensive than finding a new one, so retention should be treated as a priority.' },
            { type: 'heading', level: 3, value: 'Ways to improve retention' },
            { type: 'list', items: ['Excellent customer service.', 'Regular follow-up.', 'Product improvements.', 'Educational resources.', 'Loyalty rewards.', 'Listening to feedback.'] }
          ]
        },
        {
          id: 'lesson-100',
          title: 'Measuring Customer Acquisition',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Metrics help marketers improve future efforts by showing what is working and what needs adjustment.' },
            { type: 'heading', level: 3, value: 'Useful measurements' },
            { type: 'list', items: ['Number of new leads.', 'Qualified leads.', 'Conversion rate.', 'Cost per lead.', 'Customer acquisition cost.', 'Repeat customers.', 'Referral rate.', 'Customer satisfaction.', 'Customer lifetime value.'] }
          ]
        },
        {
          id: 'lesson-101',
          title: 'Ethical Lead Generation',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Professional marketers should respect privacy, ask permission, be transparent about data use, avoid questionable contact lists, and honor unsubscribe requests.' },
            { type: 'heading', level: 3, value: 'Ethical practices' },
            { type: 'list', items: ['Ask permission before sending promotional emails.', 'Respect customer privacy.', 'Avoid misleading offers.', 'Be transparent about how information will be used.', 'Honor unsubscribe requests.'] }
          ]
        },
        {
          id: 'lesson-102',
          title: 'Practical Activities, Assignments, and Key Takeaways',
          duration: '18 min',
          content: [
            { type: 'paragraph', value: 'Students should create a list of prospects, design a simple sales pipeline, develop a lead generation strategy, and reflect on how ethical systems create sustainable business growth.' },
            { type: 'heading', level: 3, value: 'Discussion questions' },
            { type: 'list', items: ['Why are qualified leads more valuable than many unqualified leads?', 'Why is follow-up important?', 'How can businesses improve customer retention?', 'What are the risks of unethical lead generation?', 'Why should businesses build systems rather than depend on luck?'] },
            { type: 'heading', level: 3, value: 'Key takeaways' },
            { type: 'list', items: ['Leads are people who have shown interest in a product or service.', 'Prospecting helps identify potential customers who are a good fit.', 'A sales pipeline organizes the customer acquisition process.', 'Follow-up is essential for building trust.', 'Customer retention contributes to long-term business growth.', 'Ethical marketing protects customer relationships and company reputation.', 'Sustainable businesses rely on systems rather than one-time campaigns.'] }
          ]
        }
      ]
    },

    // Module 10: Marketing Analytics, Performance Measurement, and Artificial Intelligence
    {
      id: 'module-10',
      title: 'Module 10: Marketing Analytics, Performance Measurement, and Artificial Intelligence',
      lessons: [
        {
          id: 'lesson-103',
          title: 'Module Overview',
          duration: '12 min',
          content: [
            { type: 'paragraph', value: 'This module introduces marketing analytics as a way to measure performance, interpret results, and improve future campaigns using evidence and responsible AI tools.' },
            { type: 'heading', level: 3, value: 'Course level' },
            { type: 'paragraph', value: 'Advanced' },
            { type: 'heading', level: 3, value: 'Estimated duration' },
            { type: 'paragraph', value: '15-20 hours' },
            { type: 'heading', level: 3, value: 'Learning objectives' },
            { type: 'list', items: ['Understand the importance of marketing analytics.', 'Measure the performance of marketing campaigns.', 'Interpret Key Performance Indicators (KPIs).', 'Make marketing decisions using data.', 'Prepare professional marketing reports.', 'Use Artificial Intelligence (AI) responsibly in marketing.', 'Understand marketing automation.', 'Continuously improve marketing performance.'] }
          ]
        },
        {
          id: 'lesson-104',
          title: 'What Is Marketing Analytics?',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'Marketing analytics is the process of collecting, measuring, analyzing, and interpreting marketing data to improve decision-making.' },
            { type: 'heading', level: 3, value: 'It helps businesses understand' },
            { type: 'list', items: ['Customer behaviour.', 'Campaign performance.', 'Sales trends.', 'Marketing return on investment.', 'Customer satisfaction.'] }
          ]
        },
        {
          id: 'lesson-105',
          title: 'Why Analytics Matters',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Analytics helps businesses understand what works, identify weak areas, improve strategies, reduce unnecessary spending, increase customer satisfaction, and make better decisions.' },
            { type: 'heading', level: 3, value: 'Key benefits' },
            { type: 'list', items: ['Understand what works.', 'Identify weak areas.', 'Improve marketing strategies.', 'Reduce unnecessary spending.', 'Increase customer satisfaction.', 'Predict future opportunities.'] }
          ]
        },
        {
          id: 'lesson-106',
          title: 'Key Performance Indicators (KPIs)',
          duration: '15 min',
          content: [
            { type: 'paragraph', value: 'A KPI is a measurable value used to evaluate success. Choosing the right KPIs helps a team track progress against clear goals.' },
            { type: 'heading', level: 3, value: 'Common marketing KPIs' },
            { type: 'list', items: ['Awareness: Reach, impressions, website visitors, brand mentions.', 'Engagement: Likes, comments, shares, saves, video watch time.', 'Lead generation: Number of leads, qualified leads, cost per lead.', 'Sales: Conversion rate, number of customers, revenue generated, customer acquisition cost.', 'Customer loyalty: Repeat purchases, referral rate, customer lifetime value, customer satisfaction score.'] }
          ]
        },
        {
          id: 'lesson-107',
          title: 'Understanding Marketing Reports',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Marketing reports communicate results clearly. A professional report should explain the objective, activities, results, KPIs, challenges, lessons learned, and recommendations.' },
            { type: 'heading', level: 3, value: 'What a good report includes' },
            { type: 'list', items: ['Campaign objective.', 'Marketing activities.', 'Results achieved.', 'KPIs.', 'Challenges encountered.', 'Lessons learned.', 'Recommendations.'] }
          ]
        },
        {
          id: 'lesson-108',
          title: 'Customer Feedback',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Customer feedback is one of the most valuable sources of information for improving products, services, and campaigns.' },
            { type: 'heading', level: 3, value: 'Ways to collect feedback' },
            { type: 'list', items: ['Surveys.', 'Customer interviews.', 'Product reviews.', 'Social media comments.', 'Email responses.', 'Customer support records.'] }
          ]
        },
        {
          id: 'lesson-109',
          title: 'Introduction to Artificial Intelligence (AI)',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'Artificial Intelligence refers to computer systems that assist humans in performing tasks that typically require human intelligence.' },
            { type: 'heading', level: 3, value: 'AI can support marketers by helping them' },
            { type: 'list', items: ['Generate ideas.', 'Draft content.', 'Analyze data.', 'Translate text.', 'Create marketing plans.', 'Brainstorm campaigns.', 'Organize information.'] }
          ]
        },
        {
          id: 'lesson-110',
          title: 'AI Tools for Marketing',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'AI-assisted tasks can include writing blog articles, creating email drafts, developing social media captions, brainstorming campaigns, translating content, generating presentation outlines, and analyzing customer feedback.' },
            { type: 'heading', level: 3, value: 'Important reminder' },
            { type: 'paragraph', value: 'Marketing specialists should always review AI-generated work for accuracy, tone, and relevance before publishing.' }
          ]
        },
        {
          id: 'lesson-111',
          title: 'Marketing Automation',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Marketing automation helps businesses perform repetitive tasks more efficiently and consistently.' },
            { type: 'heading', level: 3, value: 'Examples' },
            { type: 'list', items: ['Welcome emails.', 'Appointment reminders.', 'Customer follow-up emails.', 'Lead nurturing sequences.', 'Customer onboarding messages.'] }
          ]
        },
        {
          id: 'lesson-112',
          title: 'Data Privacy and Responsible AI',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Marketing professionals must respect customer privacy and use AI responsibly by collecting information with consent, protecting data, being transparent, following laws and company policies, and avoiding misleading AI-generated content.' },
            { type: 'heading', level: 3, value: 'Good practices' },
            { type: 'list', items: ['Collect information only with consent.', 'Protect customer data.', 'Be transparent about how data is used.', 'Follow applicable laws and company policies.', 'Avoid misleading AI-generated content.'] }
          ]
        },
        {
          id: 'lesson-113',
          title: 'Continuous Improvement',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Professional marketers ask what worked, what did not, why it happened, and what can be improved next time.' },
            { type: 'heading', level: 3, value: 'Mindset' },
            { type: 'paragraph', value: 'Marketing is an ongoing learning process, and the most successful marketers never stop improving.' }
          ]
        },
        {
          id: 'lesson-114',
          title: 'Creating a Marketing Dashboard',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'A dashboard offers a quick overview of marketing performance and helps teams monitor progress at a glance.' },
            { type: 'heading', level: 3, value: 'A simple dashboard may include' },
            { type: 'list', items: ['Website traffic.', 'Leads generated.', 'Sales.', 'Revenue.', 'Conversion rate.', 'Customer satisfaction.', 'Top-performing campaigns.', 'Monthly goals.'] }
          ]
        },
        {
          id: 'lesson-115',
          title: 'Making Data-Driven Decisions',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'Before making major marketing decisions, ask what the data shows, what trends are emerging, what customers are saying, which channels perform best, and which activities produce the highest return.' },
            { type: 'heading', level: 3, value: 'Key question' },
            { type: 'paragraph', value: 'Evidence should guide marketing decisions whenever possible.' }
          ]
        },
        {
          id: 'lesson-116',
          title: 'Practical Activities, Assignments, and Key Takeaways',
          duration: '18 min',
          content: [
            { type: 'paragraph', value: 'Students should create a simple dashboard, review a fictional campaign, prepare a monthly report, and analyze three campaigns using data and AI-supported insights.' },
            { type: 'heading', level: 3, value: 'Discussion questions' },
            { type: 'list', items: ['Why should marketers measure campaign performance?', 'Which KPIs are most important for a software company?', 'Can AI replace human marketers? Why or why not?', 'Why is customer feedback valuable?', 'Why should businesses continuously improve their marketing?'] },
            { type: 'heading', level: 3, value: 'Key takeaways' },
            { type: 'list', items: ['Marketing decisions should be based on evidence, not assumptions.', 'KPIs help measure success.', 'Reports communicate marketing performance clearly.', 'Customer feedback drives improvement.', 'AI is a tool that supports marketers, not a replacement for professional judgment.', 'Marketing automation increases efficiency.', 'Continuous improvement leads to long-term success.'] }
          ]
        }
      ]
    },

    // Module 11: Branding, Personal Branding, and Corporate Identity
    {
      id: 'module-11',
      title: 'Module 11: Branding, Personal Branding, and Corporate Identity',
      lessons: [
        {
          id: 'lesson-117',
          title: 'Module Overview',
          duration: '12 min',
          content: [
            { type: 'paragraph', value: 'This module explores branding as the overall impression people have of a business, product, or individual, and explains how trust, consistency, and identity shape long-term success.' },
            { type: 'heading', level: 3, value: 'Course level' },
            { type: 'paragraph', value: 'Advanced' },
            { type: 'heading', level: 3, value: 'Estimated duration' },
            { type: 'paragraph', value: '15-18 hours' },
            { type: 'heading', level: 3, value: 'Learning objectives' },
            { type: 'list', items: ['Define branding and explain its importance.', 'Differentiate between a brand, branding, and a logo.', 'Build a strong personal brand.', 'Understand corporate identity.', 'Position a business effectively in the market.', 'Build customer trust through consistent branding.', 'Manage a company’s reputation.', 'Develop a basic branding strategy for a business.'] }
          ]
        },
        {
          id: 'lesson-118',
          title: 'What Is a Brand?',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'A brand is the identity and reputation of a business, product, or individual. It is the overall impression people have about a company and what they expect from it.' },
            { type: 'heading', level: 3, value: 'Strong brands answer' },
            { type: 'list', items: ['Who are you?', 'What do you stand for?', 'Why should customers trust you?', 'How are you different from competitors?'] }
          ]
        },
        {
          id: 'lesson-119',
          title: 'Brand vs. Branding vs. Logo',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'These terms are often confused, but they mean different things.' },
            { type: 'heading', level: 3, value: 'Definitions' },
            { type: 'list', items: ['Brand: the perception people have about a business.', 'Branding: the ongoing process of creating and maintaining that perception.', 'Logo: a visual symbol used to identify a business.'] }
          ]
        },
        {
          id: 'lesson-120',
          title: 'Why Branding Matters',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Strong brands help businesses build trust, increase customer loyalty, stand out from competitors, charge premium prices in some markets, attract talented employees, and create long-term business value.' },
            { type: 'heading', level: 3, value: 'Benefits' },
            { type: 'list', items: ['Build trust.', 'Increase customer loyalty.', 'Stand out from competitors.', 'Create long-term business value.', 'Attract talented employees.'] }
          ]
        },
        {
          id: 'lesson-121',
          title: 'Brand Identity',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'Brand identity includes everything customers can see and experience, from the company name and logo to its website, tone of voice, marketing materials, and customer service.' },
            { type: 'heading', level: 3, value: 'Examples' },
            { type: 'list', items: ['Company name.', 'Logo.', 'Colours.', 'Typography.', 'Website.', 'Marketing materials.', 'Tone of voice.', 'Customer service.', 'Product quality.'] }
          ]
        },
        {
          id: 'lesson-122',
          title: 'Brand Values',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Brand values are the principles that guide a business. They should be demonstrated through actions, not only written on a website.' },
            { type: 'heading', level: 3, value: 'Possible values' },
            { type: 'list', items: ['Integrity.', 'Excellence.', 'Innovation.', 'Respect.', 'Accountability.', 'Customer focus.', 'Teamwork.'] }
          ]
        },
        {
          id: 'lesson-123',
          title: 'Brand Positioning',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'Brand positioning explains how customers should think about your business compared to alternatives.' },
            { type: 'heading', level: 3, value: 'Questions to ask' },
            { type: 'list', items: ['What problem do we solve?', 'Who do we serve?', 'What makes us different?', 'Why should customers choose us?'] }
          ]
        },
        {
          id: 'lesson-124',
          title: 'Personal Branding',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Every marketing specialist represents both themselves and the company. A strong personal brand includes professional behaviour, honest communication, continuous learning, reliability, and respect for others.' },
            { type: 'heading', level: 3, value: 'Key dimensions' },
            { type: 'list', items: ['Professional behaviour.', 'Honest communication.', 'Continuous learning.', 'Reliability.', 'Positive attitude.', 'Appropriate appearance.', 'Respect for others.'] }
          ]
        },
        {
          id: 'lesson-125',
          title: 'Building Your Professional Reputation',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'A good reputation is built over time through consistent actions and dependable communication.' },
            { type: 'heading', level: 3, value: 'Ways to strengthen it' },
            { type: 'list', items: ['Delivering on promises.', 'Responding promptly.', 'Being truthful.', 'Respecting confidentiality.', 'Accepting responsibility for mistakes.', 'Treating everyone professionally.'] }
          ]
        },
        {
          id: 'lesson-126',
          title: 'Corporate Identity',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'Corporate identity is how an organization presents itself consistently through its mission, vision, values, communication style, customer service standards, and employee behaviour.' },
            { type: 'heading', level: 3, value: 'It includes' },
            { type: 'list', items: ['Mission statement.', 'Vision statement.', 'Core values.', 'Brand colours.', 'Logo usage.', 'Communication style.', 'Customer service standards.', 'Office appearance.', 'Employee behaviour.'] }
          ]
        },
        {
          id: 'lesson-127',
          title: 'Brand Reputation Management',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Businesses should actively monitor their reputation by listening to feedback, responding professionally to complaints, correcting mistakes quickly, and encouraging satisfied customers to leave honest reviews.' },
            { type: 'heading', level: 3, value: 'Methods' },
            { type: 'list', items: ['Listening to customer feedback.', 'Monitoring online reviews.', 'Responding professionally to complaints.', 'Correcting mistakes quickly.', 'Celebrating customer success stories.'] }
          ]
        },
        {
          id: 'lesson-128',
          title: 'Brand Storytelling',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Every successful brand has a story that explains why the company was created, what problem it aims to solve, who it serves, and what values guide its work.' },
            { type: 'heading', level: 3, value: 'Why storytelling matters' },
            { type: 'paragraph', value: 'Stories help customers connect emotionally with a brand and remember it more clearly.' }
          ]
        },
        {
          id: 'lesson-129',
          title: 'Practical Activities, Assignments, and Key Takeaways',
          duration: '18 min',
          content: [
            { type: 'paragraph', value: 'Students should analyze a well-known company, write a personal brand statement, develop a branding strategy, and create a basic corporate identity guide for a fictional or real organization.' },
            { type: 'heading', level: 3, value: 'Discussion questions' },
            { type: 'list', items: ['Why do customers remain loyal to certain brands?', 'How does a company’s reputation affect sales?', 'Why is personal branding important for marketing professionals?', 'Can a strong logo compensate for poor customer service? Why or why not?', 'How can businesses rebuild trust after making mistakes?'] },
            { type: 'heading', level: 3, value: 'Key takeaways' },
            { type: 'list', items: ['A brand is a customer’s perception of a business.', 'Branding is the process of shaping that perception.', 'A logo is only one part of a brand.', 'Strong brands build trust and loyalty.', 'Personal branding influences professional opportunities.', 'Corporate identity should be consistent across all customer interactions.', 'Reputation is earned through consistent actions.'] }
          ]
        }
      ]
    },

    // Module 12: Customer Service Excellence and Customer Success
    {
      id: 'module-12',
      title: 'Module 12: Customer Service Excellence and Customer Success',
      lessons: [
        {
          id: 'lesson-130',
          title: 'Module Overview',
          duration: '12 min',
          content: [
            { type: 'paragraph', value: 'This module explains why customer service and customer success are essential for business growth, trust, retention, and brand advocacy.' },
            { type: 'heading', level: 3, value: 'Course level' },
            { type: 'paragraph', value: 'Advanced' },
            { type: 'heading', level: 3, value: 'Estimated duration' },
            { type: 'paragraph', value: '15-18 hours' },
            { type: 'heading', level: 3, value: 'Learning objectives' },
            { type: 'list', items: ['Explain the importance of customer service and customer success.', 'Deliver professional customer service before, during, and after a sale.', 'Handle customer complaints professionally.', 'Build long-term customer relationships.', 'Increase customer satisfaction and loyalty.', 'Manage difficult customer situations with professionalism.', 'Understand customer success strategies for software businesses.', 'Turn satisfied customers into brand advocates.'] }
          ]
        },
        {
          id: 'lesson-131',
          title: 'What Is Customer Service?',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Customer service is the support a business provides before, during, and after a customer purchases a product or service.' },
            { type: 'heading', level: 3, value: 'Good customer service includes' },
            { type: 'list', items: ['Answering questions promptly.', 'Providing accurate information.', 'Solving problems efficiently.', 'Treating customers with respect.', 'Following up after the sale.'] }
          ]
        },
        {
          id: 'lesson-132',
          title: 'What Is Customer Success?',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Customer success goes beyond solving problems; it helps customers achieve the results they hoped for when they purchased the product.' },
            { type: 'heading', level: 3, value: 'Example' },
            { type: 'paragraph', value: 'A school that buys the Zentrix School Management System should receive guidance to help administrators and teachers use the software effectively and improve school management.' }
          ]
        },
        {
          id: 'lesson-133',
          title: 'Understanding Customer Expectations',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Customers generally expect respect, honesty, quick responses, reliable products, fair pricing, professional communication, and consistent service.' },
            { type: 'heading', level: 3, value: 'Key point' },
            { type: 'paragraph', value: 'Meeting or exceeding these expectations strengthens trust.' }
          ]
        },
        {
          id: 'lesson-134',
          title: 'Communication Skills',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Professional communication should always be clear, respectful, patient, friendly, professional, and solution-focused.' },
            { type: 'heading', level: 3, value: 'Helpful habit' },
            { type: 'paragraph', value: 'Good communication also means listening carefully before responding.' }
          ]
        },
        {
          id: 'lesson-135',
          title: 'Active Listening',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Active listening involves giving full attention, avoiding interruptions, asking clarifying questions, confirming understanding, and responding thoughtfully.' },
            { type: 'heading', level: 3, value: 'Why it matters' },
            { type: 'paragraph', value: 'Customers appreciate being heard, and strong listening often prevents misunderstandings.' }
          ]
        },
        {
          id: 'lesson-136',
          title: 'Handling Customer Complaints',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'Complaints should be viewed as opportunities to improve. A professional approach includes listening without interrupting, showing empathy, apologizing when appropriate, understanding the issue, offering practical solutions, and following up.' },
            { type: 'heading', level: 3, value: 'Simple process' },
            { type: 'orderedList', items: ['Listen without interrupting', 'Show empathy', 'Apologize when appropriate', 'Understand the issue', 'Offer practical solutions', 'Follow up to confirm resolution'] }
          ]
        },
        {
          id: 'lesson-137',
          title: 'Difficult Customer Situations',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Not every interaction is easy. Professional marketers should remain calm, avoid arguments, focus on facts, speak respectfully, escalate issues when necessary, and protect the company’s reputation.' },
            { type: 'heading', level: 3, value: 'Key principle' },
            { type: 'paragraph', value: 'Professionalism often reduces tension and preserves trust.' }
          ]
        },
        {
          id: 'lesson-138',
          title: 'Building Customer Loyalty',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Loyal customers often buy repeatedly, recommend the business, provide constructive feedback, and trust new products from the company.' },
            { type: 'heading', level: 3, value: 'Ways to build loyalty' },
            { type: 'list', items: ['Consistent quality.', 'Excellent service.', 'Helpful follow-up.', 'Educational resources.', 'Appreciation messages.'] }
          ]
        },
        {
          id: 'lesson-139',
          title: 'Customer Retention Strategies',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Retention strategies include regular communication, product updates, customer training, technical support, loyalty programmes, appreciation events, and periodic satisfaction surveys.' },
            { type: 'heading', level: 3, value: 'Why it matters' },
            { type: 'paragraph', value: 'Retaining customers contributes to sustainable business growth.' }
          ]
        },
        {
          id: 'lesson-140',
          title: 'Customer Success for Software Businesses',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'Software businesses should provide onboarding sessions, user guides, tutorials, demonstrations, rapid technical support, and updates about new features.' },
            { type: 'heading', level: 3, value: 'Goal' },
            { type: 'paragraph', value: 'Customer success helps customers receive the full value of the software and stay engaged with it.' }
          ]
        },
        {
          id: 'lesson-141',
          title: 'Measuring Customer Satisfaction',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Businesses can measure satisfaction through customer satisfaction scores, Net Promoter Score, surveys, product reviews, customer interviews, retention rate, and referral rate.' },
            { type: 'heading', level: 3, value: 'Why measure it' },
            { type: 'paragraph', value: 'Regular measurement helps identify areas for improvement.' }
          ]
        },
        {
          id: 'lesson-142',
          title: 'Creating Brand Advocates',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'The highest level of customer success is creating brand advocates—customers who recommend your products, defend your reputation, share positive experiences, and refer new customers.' },
            { type: 'heading', level: 3, value: 'How to create them' },
            { type: 'paragraph', value: 'Businesses create advocates by consistently exceeding expectations and building stronger relationships over time.' }
          ]
        },
        {
          id: 'lesson-143',
          title: 'Practical Activities, Assignments, and Key Takeaways',
          duration: '18 min',
          content: [
            { type: 'paragraph', value: 'Students should role-play a customer service scenario, design a customer onboarding checklist, create a customer success plan, and reflect on how excellent service turns customers into loyal advocates.' },
            { type: 'heading', level: 3, value: 'Discussion questions' },
            { type: 'list', items: ['What is the difference between customer service and customer success?', 'Why are customer complaints valuable?', 'How can businesses increase customer loyalty?', 'Why is follow-up important after a sale?', 'What characteristics define an excellent customer experience?'] },
            { type: 'heading', level: 3, value: 'Key takeaways' },
            { type: 'list', items: ['Customer service supports customers before, during, and after a sale.', 'Customer success focuses on helping customers achieve their goals.', 'Active listening improves communication.', 'Complaints provide opportunities for improvement.', 'Loyal customers contribute to long-term growth.', 'Customer satisfaction should be measured regularly.', 'Great service creates brand advocates.'] }
          ]
        }
      ]
    },

    // Module 13: Marketing Leadership, Teamwork, Ethics, and Professional Development
    {
      id: 'module-13',
      title: 'Module 13: Marketing Leadership, Teamwork, Ethics, and Professional Development',
      lessons: [
        {
          id: 'lesson-144',
          title: 'Module Overview',
          duration: '12 min',
          content: [
            { type: 'paragraph', value: 'This module introduces the leadership, teamwork, ethical, and professional skills that help marketing specialists grow from individual contributors into trusted leaders and managers.' },
            { type: 'heading', level: 3, value: 'Course level' },
            { type: 'paragraph', value: 'Advanced' },
            { type: 'heading', level: 3, value: 'Estimated duration' },
            { type: 'paragraph', value: '18-20 hours' },
            { type: 'heading', level: 3, value: 'Learning objectives' },
            { type: 'list', items: ['Understand the responsibilities of a marketing leader.', 'Work effectively as part of a marketing team.', 'Apply ethical principles in marketing.', 'Manage marketing projects and campaigns.', 'Develop leadership and communication skills.', 'Resolve conflicts professionally.', 'Build a successful marketing career.', 'Demonstrate professionalism in the workplace.'] }
          ]
        },
        {
          id: 'lesson-145',
          title: 'What Is Marketing Leadership?',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Marketing leadership is the ability to guide people and resources toward achieving marketing goals through vision, decision-making, problem-solving, and positive influence.' },
            { type: 'heading', level: 3, value: 'A good leader' },
            { type: 'list', items: ['Creates a clear vision.', 'Inspires the team.', 'Makes informed decisions.', 'Solves problems.', 'Encourages innovation.', 'Supports continuous learning.', 'Leads by example.'] }
          ]
        },
        {
          id: 'lesson-146',
          title: 'Roles in a Marketing Team',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'A marketing department may include many specialized roles that contribute to the success of a campaign or business.' },
            { type: 'heading', level: 3, value: 'Examples' },
            { type: 'list', items: ['Marketing Manager.', 'Digital Marketing Specialist.', 'Social Media Manager.', 'Content Writer.', 'Graphic Designer.', 'Video Content Creator.', 'SEO Specialist.', 'Email Marketing Specialist.', 'Marketing Analyst.', 'Affiliate Programme Manager.', 'Customer Success Specialist.'] }
          ]
        },
        {
          id: 'lesson-147',
          title: 'Teamwork and Collaboration',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Successful teams share goals, communicate openly, respect one another’s ideas, support each other, complete tasks on time, and accept constructive feedback.' },
            { type: 'heading', level: 3, value: 'Key idea' },
            { type: 'paragraph', value: 'Strong teamwork produces better results than individual effort alone.' }
          ]
        },
        {
          id: 'lesson-148',
          title: 'Professional Communication',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Marketing professionals communicate with customers, colleagues, management, business partners, suppliers, and media representatives. Professional communication should be respectful, clear, honest, timely, and solution-focused.' },
            { type: 'heading', level: 3, value: 'Good communication is' },
            { type: 'list', items: ['Respectful.', 'Clear.', 'Honest.', 'Timely.', 'Solution-focused.'] }
          ]
        },
        {
          id: 'lesson-149',
          title: 'Ethics in Marketing',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'Ethical marketing builds trust and protects the company’s reputation.' },
            { type: 'heading', level: 3, value: 'Marketing professionals should' },
            { type: 'list', items: ['Tell the truth.', 'Avoid misleading advertisements.', 'Respect customer privacy.', 'Honour promises.', 'Disclose important information.', 'Compete fairly.', 'Respect intellectual property.'] }
          ]
        },
        {
          id: 'lesson-150',
          title: 'Project Management',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'Marketing campaigns are projects, and a simple project management process improves efficiency.' },
            { type: 'heading', level: 3, value: 'Basic process' },
            { type: 'orderedList', items: ['Define objectives', 'Assign responsibilities', 'Create a timeline', 'Allocate resources', 'Monitor progress', 'Evaluate results', 'Document lessons learned'] }
          ]
        },
        {
          id: 'lesson-151',
          title: 'Time Management',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Marketing specialists often manage multiple tasks, so strong time management is essential for productivity.' },
            { type: 'heading', level: 3, value: 'Good habits' },
            { type: 'list', items: ['Prioritize important work.', 'Use calendars and task lists.', 'Set realistic deadlines.', 'Avoid unnecessary distractions.', 'Review progress daily.'] }
          ]
        },
        {
          id: 'lesson-152',
          title: 'Conflict Resolution',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Disagreements are normal in teams, and they can be managed professionally when people stay calm and focus on solutions instead of personal blame.' },
            { type: 'heading', level: 3, value: 'Professional conflict resolution' },
            { type: 'list', items: ['Listen to all perspectives.', 'Stay calm.', 'Focus on the issue rather than the person.', 'Look for mutually beneficial solutions.', 'Respect differences.'] }
          ]
        },
        {
          id: 'lesson-153',
          title: 'Career Development',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Marketing is a profession that requires continuous learning and professional growth.' },
            { type: 'heading', level: 3, value: 'Ways to grow' },
            { type: 'list', items: ['Read books and industry publications.', 'Take online courses.', 'Attend seminars and conferences.', 'Earn professional certifications.', 'Learn new technologies.', 'Seek mentorship.'] }
          ]
        },
        {
          id: 'lesson-154',
          title: 'Building a Professional Portfolio',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'Every marketing professional should maintain a portfolio that demonstrates their skills through real examples of work and results.' },
            { type: 'heading', level: 3, value: 'A portfolio may include' },
            { type: 'list', items: ['Marketing plans.', 'Content calendars.', 'Social media campaigns.', 'Sample advertisements.', 'Campaign reports.', 'Customer success stories.', 'Presentations.', 'Certificates.', 'Testimonials.'] }
          ]
        },
        {
          id: 'lesson-155',
          title: 'Entrepreneurship in Marketing',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Many marketers eventually become entrepreneurs, building careers as consultants, agency owners, content creators, brand strategists, trainers, or business owners.' },
            { type: 'heading', level: 3, value: 'Key point' },
            { type: 'paragraph', value: 'Marketing skills create opportunities in many industries and career paths.' }
          ]
        },
        {
          id: 'lesson-156',
          title: 'Practical Activities, Assignments, and Key Takeaways',
          duration: '18 min',
          content: [
            { type: 'paragraph', value: 'Students should assign marketing roles, plan a product launch campaign, write a five-year career development plan, and build a professional portfolio that reflects their experience and strengths.' },
            { type: 'heading', level: 3, value: 'Discussion questions' },
            { type: 'list', items: ['What qualities make an effective marketing leader?', 'Why is teamwork important in marketing?', 'How can unethical marketing damage a business?', 'Why should professionals continue learning throughout their careers?', 'What should every marketing portfolio include?'] },
            { type: 'heading', level: 3, value: 'Key takeaways' },
            { type: 'list', items: ['Leadership is about serving others and achieving shared goals.', 'Successful marketing depends on teamwork.', 'Ethical behaviour builds long-term trust.', 'Good project management improves campaign success.', 'Continuous learning supports career growth.', 'A professional portfolio demonstrates real skills.', 'Marketing opens opportunities in employment and entrepreneurship.'] }
          ]
        }
      ]
    },

    // Module 14: Capstone Project, Internship, Professional Certification, and Graduation
    {
      id: 'module-14',
      title: 'Module 14: Capstone Project, Internship, Professional Certification, and Graduation',
      lessons: [
        {
          id: 'lesson-157',
          title: 'Module Overview',
          duration: '12 min',
          content: [
            { type: 'paragraph', value: 'This final module brings together everything students have learned by applying marketing skills in a capstone project, preparing for professional practice, and completing certification requirements.' },
            { type: 'heading', level: 3, value: 'Course level' },
            { type: 'paragraph', value: 'Professional' },
            { type: 'heading', level: 3, value: 'Estimated duration' },
            { type: 'paragraph', value: '4-8 weeks' },
            { type: 'heading', level: 3, value: 'Learning objectives' },
            { type: 'list', items: ['Apply all marketing knowledge gained throughout the programme.', 'Plan and execute a complete marketing campaign.', 'Work professionally in a team environment.', 'Present marketing strategies to management.', 'Build a professional marketing portfolio.', 'Demonstrate workplace readiness.', 'Complete the requirements for Zentrix Certified Marketing Specialist (ZCMS) certification.'] }
          ]
        },
        {
          id: 'lesson-158',
          title: 'Capstone Marketing Project',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'The capstone project is the opportunity for students to apply their marketing knowledge to a real or simulated marketing challenge for a Zentrix product or service.' },
            { type: 'heading', level: 3, value: 'Project focus' },
            { type: 'list', items: ['School Management System.', 'Customer Relationship Management (CRM) System.', 'Inventory Management System.', 'Affiliate Marketing Platform.', 'Business Website Development Service.', 'Mobile Application Development Service.'] }
          ]
        },
        {
          id: 'lesson-159',
          title: 'Market Research',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Students should identify the target audience, customer needs, competitors, market opportunities, and unique selling proposition through evidence-based research rather than assumptions.' },
            { type: 'heading', level: 3, value: 'Areas to analyze' },
            { type: 'list', items: ['Target audience.', 'Customer needs.', 'Competitors.', 'Market opportunities.', 'Unique selling proposition (USP).'] }
          ]
        },
        {
          id: 'lesson-160',
          title: 'Marketing Strategy',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'Each team should prepare a professional strategy that covers objectives, target market, brand positioning, marketing channels, content strategy, social media plan, lead generation, customer acquisition, customer retention, budget, and timeline.' },
            { type: 'heading', level: 3, value: 'Strategy components' },
            { type: 'list', items: ['Marketing objectives.', 'Target market.', 'Brand positioning.', 'Marketing channels.', 'Content strategy.', 'Social media plan.', 'Lead generation strategy.', 'Customer acquisition process.', 'Customer retention strategy.', 'Budget.', 'Timeline.'] }
          ]
        },
        {
          id: 'lesson-161',
          title: 'Campaign Execution',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Students should implement selected parts of their campaign where possible through educational social media posts, landing pages, promotional videos, email campaigns, customer interviews, or online demonstrations.' },
            { type: 'heading', level: 3, value: 'Objective' },
            { type: 'paragraph', value: 'The goal is to gain practical experience and demonstrate that marketing concepts can be applied in real settings.' }
          ]
        },
        {
          id: 'lesson-162',
          title: 'Performance Measurement',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Campaign success should be measured using relevant KPIs such as leads generated, customer engagement, website visits, conversion rate, and customer feedback.' },
            { type: 'heading', level: 3, value: 'Key metrics' },
            { type: 'list', items: ['Leads generated.', 'Customer engagement.', 'Website visits.', 'Conversion rate.', 'Customer feedback.', 'Lessons learned.'] }
          ]
        },
        {
          id: 'lesson-163',
          title: 'Professional Presentation',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Each team will deliver a professional presentation covering the business problem, research findings, marketing strategy, campaign activities, results, challenges, and recommendations.' },
            { type: 'heading', level: 3, value: 'Presentation focus' },
            { type: 'list', items: ['Business problem.', 'Research findings.', 'Marketing strategy.', 'Campaign activities.', 'Results.', 'Challenges.', 'Recommendations.'] }
          ]
        },
        {
          id: 'lesson-164',
          title: 'Internship (Recommended)',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'Whenever possible, students should complete a supervised internship in a technology company, marketing agency, small business, non-profit organization, or educational institution.' },
            { type: 'heading', level: 3, value: 'Internship journal' },
            { type: 'list', items: ['Experiences.', 'Responsibilities.', 'Achievements.', 'Lessons learned.'] }
          ]
        },
        {
          id: 'lesson-165',
          title: 'Professional Portfolio',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'Every graduate should submit a professional portfolio that demonstrates their preparedness for employment and professional practice.' },
            { type: 'heading', level: 3, value: 'Portfolio contents' },
            { type: 'list', items: ['Professional CV.', 'Personal branding statement.', 'Career development plan.', 'Marketing plan.', 'Content calendar.', 'Social media campaign.', 'Customer acquisition strategy.', 'Customer success strategy.', 'Brand strategy.', 'Campaign performance report.', 'Marketing dashboard.', 'Sample social posts.', 'Blog article.', 'Email campaign.', 'Video script.', 'Presentation slides.', 'Certificates.', 'Testimonials.', 'Internship report.', 'Capstone project report.'] }
          ]
        },
        {
          id: 'lesson-166',
          title: 'Professional Ethics Declaration',
          duration: '12 min',
          content: [
            { type: 'paragraph', value: 'Before graduation, each student should sign the Zentrix Marketing Professional Pledge, committing to honesty, professionalism, continuous learning, respect for customers, ethical marketing practices, and responsible use of technology.' },
            { type: 'heading', level: 3, value: 'Pledge summary' },
            { type: 'paragraph', value: 'I commit myself to honesty, professionalism, continuous learning, respect for customers, ethical marketing practices, and responsible use of technology. I will represent Zentrix Software Solutions with integrity and always strive to create value for customers, colleagues, and society.' }
          ]
        },
        {
          id: 'lesson-167',
          title: 'Certification Requirements',
          duration: '13 min',
          content: [
            { type: 'paragraph', value: 'To receive the Zentrix Certified Marketing Specialist (ZCMS) certificate, students must attend classes regularly, complete assignments and quizzes, finish the capstone project, submit a portfolio, demonstrate professional conduct, and present their final project successfully.' },
            { type: 'heading', level: 3, value: 'Requirements' },
            { type: 'list', items: ['Attend at least 90% of classes.', 'Complete all module assignments.', 'Pass all quizzes and examinations.', 'Complete the capstone project.', 'Submit a professional portfolio.', 'Demonstrate professional conduct.', 'Successfully present the final project.'] }
          ]
        },
        {
          id: 'lesson-168',
          title: 'Assessment Structure and Graduation',
          duration: '14 min',
          content: [
            { type: 'paragraph', value: 'Graduating students will be assessed through quizzes, assignments, group projects, practical activities, capstone work, final presentations, and professional portfolios.' },
            { type: 'heading', level: 3, value: 'Assessment breakdown' },
            { type: 'table', headers: ['Assessment', 'Weight'], rows: [['Module Quizzes', '15%'], ['Assignments', '20%'], ['Group Projects', '15%'], ['Practical Activities', '10%'], ['Capstone Project', '25%'], ['Final Presentation', '10%'], ['Professional Portfolio', '5%']] }
          ]
        },
        {
          id: 'lesson-169',
          title: 'Practical Activities and Final Project',
          duration: '18 min',
          content: [
            { type: 'paragraph', value: 'Students will individually or collaboratively design, present, and where practical execute a complete marketing campaign for a Zentrix product or service.' },
            { type: 'heading', level: 3, value: 'The project should demonstrate' },
            { type: 'list', items: ['Market research.', 'Marketing strategy.', 'Branding.', 'Content creation.', 'Social media marketing.', 'Digital marketing.', 'Lead generation.', 'Customer acquisition.', 'Customer success.', 'Marketing analytics.', 'Teamwork.', 'Leadership.', 'Professional communication.'] }
          ]
        }
      ]
    }
  ]
};

export const COURSE_CATALOG = [
  {
    id: 'zentrix-certified-marketing-specialist',
    title: COURSE_DATA.title,
    badge: 'Featured course',
    level: 'Beginner to intermediate',
    duration: '8-10 hours',
    price: '₦14,900',
    description: COURSE_DATA.description,
    modules: COURSE_DATA.modules,
    highlights: [
      'Structured lessons for fast, practical learning',
      'Progress tracking and a polished learning dashboard',
      'Built for modern marketers and business creators',
    ],
  },
];
