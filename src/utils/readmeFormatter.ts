/**
 * README 전체를 상세 영역에 렌더링합니다.
 * - 페이지 상단에 이미 `<h1>` 제목이 있으므로, 본문과 중복되는 **첫 번째 `#` 제목(H1) 한 줄만** 제거합니다.
 * - 그 외 섹션(프로젝트 개요, 기술 스택, 하위 `###` 등)은 잘라내지 않습니다.
 */
export function formatReadmeForDetail(readmeContent: string): string {
  if (!readmeContent) {
    return '';
  }

  const lines = readmeContent.split('\n');
  const result: string[] = [];
  let removedFirstH1 = false;

  const isMarkdownH1 = (trimmed: string) =>
    trimmed.startsWith('#') && !trimmed.startsWith('##');

  for (const line of lines) {
    const trimmed = line.trim();

    if (!removedFirstH1) {
      if (trimmed === '') {
        result.push(line);
        continue;
      }
      if (isMarkdownH1(trimmed)) {
        removedFirstH1 = true;
        continue;
      }
      removedFirstH1 = true;
    }

    result.push(line);
  }

  return result.join('\n').trim();
}
