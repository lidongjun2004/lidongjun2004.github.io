import type { Section } from './sections';
import { SECTIONS } from './sections';

/** Extract the section (top-level directory) from a post id */
export function getSection(id: string): Section {
  return id.split('/')[0] as Section;
}

/** Check if a post id is a folder index (_index) */
export function isIndex(id: string): boolean {
  return id.endsWith('/_index');
}

/** Get the "slug" portion after the section prefix, stripping _index */
export function getSlug(id: string): string {
  const section = getSection(id);
  const rest = id.slice(section.length + 1);
  if (rest === '_index') return '';
  return rest.replace(/\/_index$/, '');
}

/** Get the browsable URL path for a post or folder */
export function getUrl(id: string): string {
  if (isIndex(id)) {
    const path = id.replace(/\/_index$/, '');
    return `/${path}/`;
  }
  return `/${id}/`;
}

interface FolderEntry {
  name: string;
  path: string;
  post: any;
}

interface ContentChildren {
  folders: FolderEntry[];
  docs: any[];
}

/**
 * List direct children (folders and documents) of a given directory path.
 * e.g. parentPath = "tech-stack" returns folders like "tech-stack/backend"
 * and docs like "tech-stack/go-concurrency-patterns"
 */
export function listChildren(allPosts: any[], parentPath: string): ContentChildren {
  const prefix = parentPath + '/';
  const folders: FolderEntry[] = [];
  const docs: any[] = [];

  for (const post of allPosts) {
    const id: string = post.id;
    if (!id.startsWith(prefix)) continue;

    const rest = id.slice(prefix.length);
    const parts = rest.split('/');

    if (parts.length === 1) {
      // Direct child
      if (rest === '_index') continue; // skip own index
      docs.push(post);
    } else if (parts.length === 2 && parts[1] === '_index') {
      // Subfolder index
      folders.push({
        name: parts[0],
        path: parentPath + '/' + parts[0],
        post,
      });
    }
    // Deeper items are not direct children, skip
  }

  // Sort folders alphabetically, docs by date (newest first)
  folders.sort((a, b) => a.name.localeCompare(b.name));
  docs.sort((a, b) => {
    const da = a.data.date?.getTime() ?? 0;
    const db = b.data.date?.getTime() ?? 0;
    return db - da;
  });

  return { folders, docs };
}
