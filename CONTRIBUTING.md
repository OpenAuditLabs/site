# Contributing to OpenAuditLabs/Site

Thank you for your interest in contributing to OpenAuditLabs/Site! We appreciate your support and welcome contributions from developers of all skill levels. This guide will help you understand our development process and how to submit contributions effectively.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Issue Guidelines](#issue-guidelines)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Testing](#testing)
- [Review Process](#review-process)
- [Getting Help](#getting-help)

## Code of Conduct

This project adheres to a Code of Conduct that all contributors are expected to follow. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## Getting Started

### Ways to Contribute

We welcome various types of contributions:

- **Bug Reports**: Help us identify and fix issues
- **Feature Requests**: Suggest new features or improvements
- **Code Contributions**: Submit bug fixes, features, or optimizations
- **Documentation**: Improve existing documentation or add new guides
- **Design**: Contribute to UI/UX improvements
- **Testing**: Help improve test coverage and quality

### Prerequisites

Before contributing, ensure you have:

- Node.js 18.0 or later
- pnpm package manager
- Git installed and configured
- Basic knowledge of Next.js, React, and TypeScript

## Development Setup

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/site.git
   cd site
   ```
3. **Install dependencies**:
   ```bash
   pnpm install
   ```
4. **Create a new branch** for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```
5. **Start the development server**:
   ```bash
   pnpm dev
   ```
6. **Verify the setup** by navigating to `http://localhost:3000`

### Environment Configuration

- Copy `.env.example` to `.env.local` if present
- Configure any necessary environment variables for development

## How to Contribute

### Before You Start

1. **Check existing issues** to avoid duplicating work
2. **Create an issue** for new features or significant changes
3. **Comment on the issue** to express your intent to work on it
4. **Wait for approval** from maintainers for new features

### Making Changes

1. **Keep changes focused**: One feature or fix per pull request
2. **Follow coding standards**: Ensure your code adheres to our style guide
3. **Write meaningful commit messages**: Follow our commit message conventions
4. **Test your changes**: Run existing tests and add new ones if needed
5. **Update documentation**: Keep README and other docs current

## Issue Guidelines

### Reporting Bugs

When reporting bugs, please include:

- **Clear title** describing the issue
- **Steps to reproduce** the problem
- **Expected behavior** vs actual behavior
- **Screenshots** if applicable
- **Environment details** (OS, browser, Node.js version)
- **Error messages** or console output

### Requesting Features

For feature requests, provide:

- **Clear description** of the proposed feature
- **Use case** and benefits
- **Possible implementation** approach (if known)
- **Alternatives considered**

### Issue Labels

We use labels to categorize issues:
- `bug`: Something isn't working correctly
- `enhancement`: New feature or improvement
- `documentation`: Documentation related
- `good first issue`: Good for newcomers
- `help wanted`: Extra attention needed

## Pull Request Process

### Before Submitting

1. **Ensure your branch is up-to-date**:
   ```bash
   git checkout main
   git pull origin main
   git checkout your-branch
   git rebase main
   ```

2. **Run quality checks**:
   ```bash
   pnpm lint
   pnpm type-check
   pnpm test
   ```

3. **Build the project**:
   ```bash
   pnpm build
   ```

### Pull Request Guidelines

- **Use a clear title** that describes the change
- **Reference related issues** using keywords (e.g., "Fixes #123")
- **Provide detailed description** of changes made
- **Include screenshots** for UI changes
- **Keep PRs small** and focused (typically under 400 lines)
- **Request review** from appropriate maintainers

### Pull Request Template

```markdown
## Description
Brief description of changes

## Related Issue
Fixes #(issue number)

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tests pass locally
- [ ] Added tests for new functionality
- [ ] Manual testing completed

## Screenshots (if applicable)
Include relevant screenshots

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes (or documented)
```

## Coding Standards

### TypeScript Guidelines

- **Use TypeScript** for all new code
- **Define proper types** instead of using `any`
- **Export types** from a central location when shared
- **Use interfaces** for object shapes
- **Prefer type unions** over enums when appropriate

### Code Style

- **ESLint**: Follow the project's ESLint configuration
- **Prettier**: Code formatting is handled automatically
- **Naming conventions**:
  - Components: `PascalCase`
  - Functions/variables: `camelCase`
  - Constants: `UPPER_SNAKE_CASE`
  - Files: `kebab-case` or `PascalCase` for components

### Next.js Best Practices

- **Use App Router** for new routes
- **Server Components** by default, Client Components when needed
- **Dynamic imports** for heavy components
- **Proper error boundaries** for error handling
- **SEO optimization** with metadata API

### Component Guidelines

- **Single responsibility**: Each component should have one clear purpose
- **Prop validation**: Use TypeScript interfaces for props
- **Default props**: Use default parameters instead of defaultProps
- **Component composition**: Prefer composition over inheritance

## Commit Message Guidelines

We follow the [Conventional Commits](https://conventionalcommits.org/) specification:

### Format

```
<type>[optional scope]: <description>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```bash
feat(auth): add user authentication system
fix(ui): resolve mobile navigation issue
docs(readme): update installation instructions
style(components): format code with prettier
```

### Rules

- Use imperative mood ("add" not "added")
- Capitalize the first letter
- No period at the end
- Limit subject line to 50 characters
- Separate subject from body with blank line
- Wrap body at 72 characters

## Testing

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

### Writing Tests

- **Unit tests**: Test individual components and functions
- **Integration tests**: Test component interactions
- **E2E tests**: Test complete user workflows
- **Test coverage**: Aim for >80% coverage for new code

### Testing Guidelines

- **Test behavior**, not implementation
- **Use descriptive test names**
- **Follow AAA pattern**: Arrange, Act, Assert
- **Mock external dependencies**
- **Test edge cases** and error conditions

## Review Process

### What We Look For

- **Code quality**: Clean, readable, maintainable code
- **Performance**: Efficient algorithms and minimal impact
- **Security**: No vulnerabilities or unsafe practices
- **Accessibility**: WCAG compliance for UI changes
- **Documentation**: Appropriate comments and documentation

### Review Timeline

- **Small PRs**: 1-2 business days
- **Medium PRs**: 2-3 business days
- **Large PRs**: 3-5 business days

### Addressing Feedback

- **Respond promptly** to review comments
- **Ask for clarification** if feedback is unclear
- **Push new commits** to address feedback
- **Request re-review** after making changes

## Getting Help

### Communication Channels

- **GitHub Issues**: For bug reports and feature requests
- **GitHub Discussions**: For general questions and ideas
- **Pull Request Comments**: For code-specific discussions

### Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [pnpm Documentation](https://pnpm.io/motivation)

## License

By contributing to OpenAuditLabs/Site, you agree that your contributions will be licensed under the AGPL 3.0 License.

Thank you for contributing to OpenAuditLabs/Site! Your efforts help make government audit data more accessible and useful for everyone.