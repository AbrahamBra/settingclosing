import { describe, it, expect } from 'vitest'
import { buildSystemPrompt, buildUserPrompt } from '../../lib/clone/prompt'

describe('buildSystemPrompt', () => {
  it('includes all provided posts as few-shot examples', () => {
    const posts = ['Post A contenu.', 'Post B contenu différent.']
    const prompt = buildSystemPrompt(posts)
    expect(prompt).toContain('Post A contenu.')
    expect(prompt).toContain('Post B contenu différent.')
  })

  it('asks for a 50 to 80 words LinkedIn prospection message', () => {
    const prompt = buildSystemPrompt(['x'])
    expect(prompt).toMatch(/50.*80.*mots/i)
    expect(prompt).toMatch(/linkedin/i)
  })

  it('forbids AI tell-tale patterns explicitly', () => {
    const prompt = buildSystemPrompt(['x'])
    expect(prompt.toLowerCase()).toMatch(/sans (signaux|patterns) (ia|ai)|éviter.*(ia|ai)/i)
  })
})

describe('buildUserPrompt', () => {
  it('wraps the target context into a message request', () => {
    const user = buildUserPrompt('Prospect DG PME industrielle 50-200 pers qui a réagi à un post sur la RSE')
    expect(user).toContain('DG PME industrielle')
    expect(user.toLowerCase()).toContain('prospect')
  })
})
