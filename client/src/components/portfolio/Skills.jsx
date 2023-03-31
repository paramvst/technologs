import { Box, Flex, Heading, Text, Tooltip } from '@chakra-ui/react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';
import { SiNextDotJs, SiNodeDotJs } from 'react-icons/si';
import { FcOvertime } from 'react-icons/fc';

const Skills = () => {
  return (
    <Box py="10">
      <Heading as="h2" size="2xl" textAlign="center" mb="10">
        Skills
      </Heading>
      <Flex flexWrap="wrap" justifyContent="center">
        <Tooltip label="HTML5">
          <Box as={FaHtml5} size="6em" color="orange.500" mx="4" my="4" />
        </Tooltip>
        <Tooltip label="CSS3">
          <Box as={FaCss3Alt} size="6em" color="blue.500" mx="4" my="4" />
        </Tooltip>
        <Tooltip label="JavaScript">
          <Box as={FaJsSquare} size="6em" color="yellow.500" mx="4" my="4" />
        </Tooltip>
        <Tooltip label="React">
          <Box as={FaReact} size="6em" color="cyan.500" mx="4" my="4" />
        </Tooltip>
        <Tooltip label="Next.js">
          <Box as={SiNextDotJs} size="6em" color="black" mx="4" my="4" />
        </Tooltip>
        <Tooltip label="Node.js">
          <Box as={SiNodeDotJs} size="6em" color="green.500" mx="4" my="4" />
        </Tooltip>
      </Flex>
      <Text fontSize="xl" textAlign="center" mt="8">
        These are some of the technologies and tools that I am proficient with
        and use on a regular basis.
      </Text>

      <Heading textAlign="center" marginTop="2ch">
        Other Skills
      </Heading>

      <Flex flexWrap="wrap" justifyContent="center">
        <Tooltip
          label="Whether you're a new hire learning the
          ropes, a long-time staff member adjusting to change management, or a
          manager adopting transformative technologies in the workplace, you're
          going to face some disruption in your career. Companies want employees
          who can quickly acclimate to different environments and are open to
          new processes and technologies."
        >
          <Box padding="2ch">
            <Box as={FcOvertime} size="4em" mx="4" my="4" />
            <Heading size="md">Adaptability</Heading>
          </Box>
        </Tooltip>
        <Tooltip
          label="Mistakes are expensive to
          businesses in terms of time and money. To show prospective employers
          that you are careful and deliberate in all you do, submit a tailored,
          proofread resume and cover letter with work history highlights that
          exemplify diligence and conscientiousness."
        >
          <Box padding="2ch">
            <Box as={FaHtml5} size="4em" mx="4" my="4" />
            <Heading size="md">Attention to detail</Heading>
          </Box>
        </Tooltip>
        <Tooltip
          label="How well you work with others, both
          team members and across departments, is going to be critical to your
          career success. Give examples in your work historyor if you're a
          new university grad, examples from your labs, seminars and coursework
         that demonstrate successful teamwork and partnerships."
        >
          <Box padding="2ch">
            <Box as={FaHtml5} size="4em" mx="4" my="4" />
            <Heading size="md">Collaboration</Heading>
          </Box>
        </Tooltip>
        <Tooltip
          label="No matter the industry, no matter the
          position, verbal and presentation skills are an increasingly important
          soft skill in the workplace. Employers are looking for candidates who
          can message to different audiences, from interns to the C-suite,
          without resorting to jargon, and can present to an audience with
          confidence."
        >
          <Box padding="2ch">
            <Box as={FaHtml5} size="4em" mx="4" my="4" />
            <Heading size="md">Communication</Heading>
          </Box>
        </Tooltip>
        <Tooltip
          label="Businesses grow with the infusion of
          fresh ideas and new approaches to old problems. Hiring managers will
          give a careful look at someone whose resume skills show they think
          outside of the box, challenge the status quo and offer novel
          solutions."
        >
          <Box padding="2ch">
            <Box as={FaHtml5} size="4em" mx="4" my="4" />
            <Heading size="md">Creativity</Heading>
          </Box>
        </Tooltip>
        <Tooltip
          label="A company's prosperityand an
          employee's career prospectsis tied to good customer service.
          Employers want staff to be dedicated to meeting the expectations of
          both internal stakeholders and external clients."
        >
          <Box padding="2ch">
            <Box as={FaHtml5} size="4em" mx="4" my="4" />
            <Heading size="md">Customer service</Heading>
          </Box>
        </Tooltip>
        <Tooltip
          label="Most savvy managers want to give
          staff a measure of autonomy so leadership can focus on the bigger
          picture (they also know it can improve employee happiness and
          performance). That's why they value employees who can assess a
          situation and determine the next steps to take, rather than
          continually ask for guidance."
        >
          <Box padding="2ch">
            <Box as={FaHtml5} size="4em" mx="4" my="4" />
            <Heading size="md">Decision making</Heading>
          </Box>
        </Tooltip>
        <Tooltip
          label="Understanding the emotions of others is
          important if you want to effectively engage with coworkers, managers,
          direct reports, customers and clients. Whether for a senior leadership
          or staff-level role, the ability to put yourself in someone else's
          shoes is a valuable trait."
        >
          <Box padding="2ch">
            <Box as={FaHtml5} size="4em" mx="4" my="4" />
            <Heading size="md">Empathy</Heading>
          </Box>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Skills;
