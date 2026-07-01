# teacher-training-designer

A [Claude Code Skill](https://docs.claude.com/en/docs/claude-code/skills) that designs multi-session teacher professional-development trainings (교원연수/직무연수) explicitly justified against a competency/behavioral-indicator framework (역량체계, 행동지표).

Ships with Korea's "AI·디지털 교육 역량체계" (A~G, 7 competencies × 3 indicators = 21 behavioral indicators) as the default framework, but accepts any other competency framework the user supplies.

## What it does

Given a training topic and session count, this skill:

1. Secures the competency framework (bundled default, or fetches/accepts a user-supplied one)
2. Asks clarifying questions one at a time (audience baseline, end goal, schedule structure, competency-combination trade-offs with a recommendation)
3. Presents the design in confirmable sections: overview → competency mapping → session-by-session run sheet (분 단위 도입-전개-정리)
4. Produces an indicator ↔ activity ↔ observable-behavior mapping table
5. Saves the finished design as a document

## Structure

```
teacher-training-designer/
├── SKILL.md                              # Workflow instructions
├── references/
│   ├── competency-framework.md           # Default A~G / 21-indicator framework + combination patterns
│   └── example-document-format.md        # Document structure reverse-engineered from real example lesson write-ups
└── assets/
    └── design-template.md                # Fill-in-the-blank template for the final output document
```

## Install

Copy this folder into `~/.claude/skills/teacher-training-designer/` (personal skills directory).

## Origin

Built while designing a 3-session "Claude CLI for teachers" training tied to this competency framework — generalized so future trainings don't have to redo the same process from scratch.
