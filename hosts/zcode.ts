import { defineHost } from './define-host';

/**
 * ZCode — Z.ai's Agentic Development Environment.
 *
 * Skill discovery (user → workspace): ~/.zcode/skills/<name>/SKILL.md and
 * <repo>/.zcode/skills/<name>/SKILL.md, plus the ~/.agents/skills and
 * .agents/skills compatibility roots. The derived defaults (.zcode/skills/
 * gstack global + local) match the native locations, so no path overrides.
 * ZCode takes instructions from AGENTS.md (~/.zcode/AGENTS.md user scope,
 * <repo>/AGENTS.md workspace scope), not CLAUDE.md.
 */
const zcode = defineHost({
  name: 'zcode',
  displayName: 'ZCode',

  extraPathRewrites: [
    { from: 'CLAUDE.md', to: 'AGENTS.md' },
  ],

  coAuthorTrailer: 'Co-Authored-By: ZCode Agent <agent@z.ai>',
});

export default zcode;
