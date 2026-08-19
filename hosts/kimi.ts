import { defineHost } from './define-host';

/**
 * Kimi Code CLI — Moonshot AI's terminal coding agent.
 *
 * Skill discovery, priority project > user > extra > built-in:
 * $KIMI_CODE_HOME/skills (default ~/.kimi-code/skills) and ~/.agents/skills
 * at user scope, <repo>/.kimi-code/skills and <repo>/.agents/skills at
 * project scope. The CLI binary is `kimi`. Skills use SKILL.md with a
 * name+description frontmatter (the default allowlist keeps exactly those).
 * Instructions load from AGENTS.md, not CLAUDE.md.
 */
const kimi = defineHost({
  name: 'kimi',
  displayName: 'Kimi Code CLI',

  globalRoot: '.kimi-code/skills/gstack',
  localSkillRoot: '.kimi-code/skills/gstack',
  hostSubdir: '.kimi-code',

  extraPathRewrites: [
    { from: 'CLAUDE.md', to: 'AGENTS.md' },
  ],

  coAuthorTrailer: 'Co-Authored-By: Kimi Code <agent@moonshot.ai>',
});

export default kimi;
