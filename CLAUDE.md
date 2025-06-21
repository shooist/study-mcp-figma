# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Language Preference

**Always respond in Japanese (日本語で回答してください)**

## Rule Management

When the user says "以降は" , "今後は" or "これからは" (from now on) followed by a new rule or instruction, automatically add that rule to this CLAUDE.md file so that future Claude Code instances will follow it.

## Project Overview

This is a study project for exploring MCP (Model Context Protocol) integration with Figma. The repository is currently in its initial state with only Claude Code settings configured.

## Current State

The repository contains:
- `.claude/settings.local.json` - Claude Code permissions configuration allowing limited bash operations (find and ls commands)

## Development Setup

As this is a study project in early stages, development setup will depend on the specific MCP and Figma integration approach chosen. Common setups might include:
- Node.js/TypeScript for MCP server implementation
- Python for MCP server implementation
- Package management via npm/pnpm or pip/poetry depending on language choice

## Architecture Notes

This repository appears to be set up for exploring MCP (Model Context Protocol) patterns with Figma API integration. MCP typically involves:
- Server implementation that handles protocol messages
- Client-server communication over stdio, HTTP, or WebSocket transports
- Resource and tool definitions for external system integration

The Figma integration aspect would likely involve:
- Figma API authentication and access patterns
- Design file reading and manipulation capabilities
- Potential real-time collaboration features