import { notFound } from 'next/navigation';
import { getProjectById } from '@/data/projects';
import fs from 'fs';
import path from 'path';
import ProjectDetail from '@/components/Projects/ProjectDetail';
import { formatReadmeForDetail } from '@/utils/readmeFormatter';

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  const { projects } = await import('@/data/projects');
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const projectId = parseInt(id, 10);
  const project = getProjectById(projectId);

  if (!project) {
    notFound();
  }

  // README 파일 읽기
  let readmeContent = '';
  if (project.readmePath) {
    try {
      const fullPath = path.join(process.cwd(), 'src', 'data', project.readmePath);
      const rawContent = fs.readFileSync(fullPath, 'utf-8');
      readmeContent = formatReadmeForDetail(rawContent);
    } catch (error) {
      console.error('Failed to read README:', error);
    }
  }

  return <ProjectDetail project={project} readmeContent={readmeContent} />;
}
