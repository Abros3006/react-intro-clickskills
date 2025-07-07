import { ChevronLeft, ChevronRight, BookOpen, Code, Lightbulb, Type } from 'lucide-react';

const InputsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
          <span>Module 4</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-amber-400">Inputs</span>
        </nav>

        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
              <Type className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">Input Handling in React</h1>
              <p className="text-gray-400 mt-2">
                Master form inputs, controlled components, and user input validation in React
              </p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Introduction to Inputs Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-amber-400/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-amber-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Understanding Input Handling</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Input handling in React involves managing user input through form elements like text inputs, 
                checkboxes, radio buttons, and select dropdowns. React provides two main approaches: 
                controlled and uncontrolled components.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Controlled components are the React way of handling inputs where the input's value is 
                controlled by React state. This gives you complete control over the input's behavior 
                and allows for real-time validation, formatting, and data transformation.
              </p>
              <div className="bg-amber-400/5 border border-amber-400/20 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-amber-400" />
                  <span className="text-amber-400 font-medium">Key Insight</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Always prefer controlled components over uncontrolled ones. They provide better 
                  predictability and make testing easier.
                </p>
              </div>
            </div>
          </section>

          {/* Controlled Components Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-amber-400/10 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-amber-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Controlled Components</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                In controlled components, the input value is stored in React state and updated through event handlers:
              </p>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm mb-6">
                <div className="text-amber-400 mb-2">// Text Input Example</div>
                <div className="space-y-1 text-gray-300">
                  <div><span className="text-blue-400">function</span> <span className="text-yellow-400">TextInput</span>()</div>
                  <div className="pl-4 space-y-1">
                    <div><span className="text-blue-400">const</span> [<span className="text-white">text</span>, <span className="text-white">setText</span>] = <span className="text-white">useState</span>(<span className="text-green-400">''</span>);</div>
                    <div></div>
                    <div><span className="text-blue-400">const</span> <span className="text-white">handleChange</span> = (<span className="text-white">event</span>) =&gt;</div>
                    <div className="pl-4"><span className="text-white">setText</span>(<span className="text-white">event.target.value</span>);</div>
                    <div></div>
                    <div><span className="text-blue-400">return</span> (</div>
                    <div className="pl-4 space-y-1">
                      <div>&lt;<span className="text-red-400">input</span></div>
                      <div className="pl-4"><span className="text-amber-400">type</span>=<span className="text-green-400">"text"</span></div>
                      <div className="pl-4"><span className="text-amber-400">value</span>={<span className="text-white">text</span>}</div>
                      <div className="pl-4"><span className="text-amber-400">onChange</span>={<span className="text-white">handleChange</span>}</div>
                      <div className="pl-4"><span className="text-amber-400">placeholder</span>=<span className="text-green-400">"Enter text"</span></div>
                      <div>/&gt;</div>
                    </div>
                    <div>);</div>
                  </div>
                </div>
              </div>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm">
                <div className="text-amber-400 mb-2">// Checkbox Example</div>
                <div className="space-y-1 text-gray-300">
                  <div><span className="text-blue-400">function</span> <span className="text-yellow-400">CheckboxInput</span>()</div>
                  <div className="pl-4 space-y-1">
                    <div><span className="text-blue-400">const</span> [<span className="text-white">isChecked</span>, <span className="text-white">setIsChecked</span>] = <span className="text-white">useState</span>(<span className="text-purple-400">false</span>);</div>
                    <div></div>
                    <div><span className="text-blue-400">return</span> (</div>
                    <div className="pl-4 space-y-1">
                      <div>&lt;<span className="text-red-400">label</span>&gt;</div>
                      <div className="pl-4">&lt;<span className="text-red-400">input</span></div>
                      <div className="pl-8"><span className="text-amber-400">type</span>=<span className="text-green-400">"checkbox"</span></div>
                      <div className="pl-8"><span className="text-amber-400">checked</span>={<span className="text-white">isChecked</span>}</div>
                      <div className="pl-8"><span className="text-amber-400">onChange</span>={<span className="text-white">setIsChecked</span>}</div>
                      <div className="pl-4">/&gt;</div>
                      <div className="pl-4">Accept Terms</div>
                      <div>&lt;/<span className="text-red-400">label</span>&gt;</div>
                    </div>
                    <div>);</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Input Types Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-amber-400/10 rounded-lg flex items-center justify-center">
                <Type className="w-5 h-5 text-amber-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Common Input Types</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Text Inputs</h3>
                      <p className="text-gray-400 text-sm">text, email, password, url, tel for different text input types</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Number Inputs</h3>
                      <p className="text-gray-400 text-sm">number, range for numeric values with built-in validation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Date Inputs</h3>
                      <p className="text-gray-400 text-sm">date, time, datetime-local for date and time selection</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Selection Inputs</h3>
                      <p className="text-gray-400 text-sm">checkbox, radio, select for multiple choice options</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">File Inputs</h3>
                      <p className="text-gray-400 text-sm">file for file uploads with accept attribute for filtering</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Text Areas</h3>
                      <p className="text-gray-400 text-sm">textarea for multi-line text input with rows and cols</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Select and Radio Buttons Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-amber-400/10 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-amber-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Select Dropdowns & Radio Buttons</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Handle dropdowns and radio button groups for single-choice selections:
              </p>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm mb-6">
                <div className="text-amber-400 mb-2">// Select Dropdown Example</div>
                <div className="space-y-1 text-gray-300">
                  <div><span className="text-blue-400">function</span> <span className="text-yellow-400">SelectInput</span>()</div>
                  <div className="pl-4 space-y-1">
                    <div><span className="text-blue-400">const</span> [<span className="text-white">selectedOption</span>, <span className="text-white">setSelectedOption</span>] = <span className="text-white">useState</span>(<span className="text-green-400">''</span>);</div>
                    <div></div>
                    <div><span className="text-blue-400">return</span> (</div>
                    <div className="pl-4 space-y-1">
                        <div>
                        &lt;<span className="text-red-400">select</span>{' '}
                        <span className="text-amber-400">value</span>=
                        {'{'}<span className="text-white">selectedOption</span>{'}'}{' '}
                        <span className="text-amber-400">onChange</span>=
                        {'{'}<span className="text-white">e</span> =&gt;{' '}
                        <span className="text-white">setSelectedOption</span>(
                        <span className="text-white">e.target.value</span>) {'}'}&gt;
                        </div>
                      <div className="pl-4">&lt;<span className="text-red-400">option</span> <span className="text-amber-400">value</span>=<span className="text-green-400">""</span>&gt;Choose option&lt;/<span className="text-red-400">option</span>&gt;</div>
                      <div className="pl-4">&lt;<span className="text-red-400">option</span> <span className="text-amber-400">value</span>=<span className="text-green-400">"react"</span>&gt;React&lt;/<span className="text-red-400">option</span>&gt;</div>
                      <div className="pl-4">&lt;<span className="text-red-400">option</span> <span className="text-amber-400">value</span>=<span className="text-green-400">"vue"</span>&gt;Vue&lt;/<span className="text-red-400">option</span>&gt;</div>
                      <div className="pl-4">&lt;<span className="text-red-400">option</span> <span className="text-amber-400">value</span>=<span className="text-green-400">"angular"</span>&gt;Angular&lt;/<span className="text-red-400">option</span>&gt;</div>
                      <div>&lt;/<span className="text-red-400">select</span>&gt;</div>
                    </div>
                    <div>);</div>
                  </div>
                </div>
              </div>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm">
                <div className="text-amber-400 mb-2">// Radio Button Group Example</div>
                <div className="space-y-1 text-gray-300">
                  <div><span className="text-blue-400">function</span> <span className="text-yellow-400">RadioGroup</span>()</div>
                  <div className="pl-4 space-y-1">
                    <div><span className="text-blue-400">const</span> [<span className="text-white">selectedValue</span>, <span className="text-white">setSelectedValue</span>] = <span className="text-white">useState</span>(<span className="text-green-400">''</span>);</div>
                    <div></div>
                    <div><span className="text-blue-400">return</span> (</div>
                    <div className="pl-4 space-y-1">
                      <div>&lt;<span className="text-red-400">div</span>&gt;</div>
                      <div className="pl-4">&lt;<span className="text-red-400">label</span>&gt;</div>
                      <div className="pl-8">&lt;<span className="text-red-400">input</span> <span className="text-amber-400">type</span>=<span className="text-green-400">"radio"</span> <span className="text-amber-400">value</span>=<span className="text-green-400">"small"</span> <span className="text-amber-400">checked</span>={<span className="text-white">selectedValue</span> === <span className="text-green-400">'small'</span>}</div>
                        <div className="pl-12">
                        <span className="text-amber-400">onChange</span>=
                        {'{'}<span className="text-white">e</span> =&gt;{' '}
                        <span className="text-white">setSelectedValue</span>(
                        <span className="text-white">e.target.value</span>) {'}'}
                        {' '}<span className="text-white">/&gt;</span>
                        </div>
                      <div className="pl-8">Small</div>
                      <div className="pl-4">&lt;/<span className="text-red-400">label</span>&gt;</div>
                      <div>&lt;/<span className="text-red-400">div</span>&gt;</div>
                    </div>
                    <div>);</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Input Validation Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-amber-400/10 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-amber-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Input Validation</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Implement client-side validation to provide immediate feedback to users:
              </p>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm mb-6">
                <div className="text-amber-400 mb-2">// Email Validation Example</div>
                <div className="space-y-1 text-gray-300">
                  <div><span className="text-blue-400">function</span> <span className="text-yellow-400">EmailInput</span>()</div>
                  <div className="pl-4 space-y-1">
                    <div><span className="text-blue-400">const</span> [<span className="text-white">email</span>, <span className="text-white">setEmail</span>] = <span className="text-white">useState</span>(<span className="text-green-400">''</span>);</div>
                    <div><span className="text-blue-400">const</span> [<span className="text-white">error</span>, <span className="text-white">setError</span>] = <span className="text-white">useState</span>(<span className="text-green-400">''</span>);</div>
                    <div></div>
                    <div><span className="text-blue-400">const</span> <span className="text-white">validateEmail</span> = (<span className="text-white">value</span>) =&gt;</div>
                    <div className="pl-4 space-y-1">
                      <div><span className="text-blue-400">const</span> <span className="text-white">emailRegex</span> = <span className="text-red-400">/^[^\s@]+@[^\s@]+\.[^\s@]+$/</span>;</div>
                      <div><span className="text-blue-400">if</span> (!<span className="text-white">emailRegex.test</span>(<span className="text-white">value</span>))</div>
                      <div className="pl-4"><span className="text-white">setError</span>(<span className="text-green-400">'Please enter a valid email'</span>);</div>
                      <div><span className="text-blue-400">else</span> <span className="text-white">setError</span>(<span className="text-green-400">''</span>);</div>
                    </div>
                    <div></div>
                    <div><span className="text-blue-400">const</span> <span className="text-white">handleChange</span> = (<span className="text-white">e</span>) =&gt;</div>
                    <div className="pl-4 space-y-1">
                      <div><span className="text-blue-400">const</span> <span className="text-white">value</span> = <span className="text-white">e.target.value</span>;</div>
                      <div><span className="text-white">setEmail</span>(<span className="text-white">value</span>);</div>
                      <div><span className="text-white">validateEmail</span>(<span className="text-white">value</span>);</div>
                    </div>
                    <div></div>
                    <div><span className="text-blue-400">return</span> (</div>
                    <div className="pl-4 space-y-1">
                      <div>&lt;<span className="text-red-400">div</span>&gt;</div>
                      <div className="pl-4">&lt;<span className="text-red-400">input</span> <span className="text-amber-400">type</span>=<span className="text-green-400">"email"</span> <span className="text-amber-400">value</span>={<span className="text-white">email</span>} <span className="text-amber-400">onChange</span>={<span className="text-white">handleChange</span>} /&gt;</div>
                        <div className="pl-4">
                        {'{'}
                        <span className="text-white">error</span> &&{' '}
                        &lt;<span className="text-red-400">span</span>{' '}
                        <span className="text-amber-400">className</span>=
                        <span className="text-green-400">"error"</span>&gt;
                        {'{'}<span className="text-white">error</span>{'}'}
                        &lt;/<span className="text-red-400">span</span>&gt;
                        {'}'}
                        </div>
                      <div>&lt;/<span className="text-red-400">div</span>&gt;</div>
                    </div>
                    <div>);</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="text-2xl mb-2">✅</div>
                  <h3 className="font-semibold text-white mb-2">Real-time Validation</h3>
                  <p className="text-gray-400 text-sm">Validate input as the user types for immediate feedback and better UX.</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="text-2xl mb-2">🔒</div>
                  <h3 className="font-semibold text-white mb-2">Server-side Validation</h3>
                  <p className="text-gray-400 text-sm">Always validate on the server too - client-side validation is for UX only.</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="text-2xl mb-2">🎯</div>
                  <h3 className="font-semibold text-white mb-2">Clear Error Messages</h3>
                  <p className="text-gray-400 text-sm">Provide specific, actionable error messages that help users fix issues.</p>
                </div>
                <div className="bg-black/30 rounded-lg p-4">
                  <div className="text-2xl mb-2">♿</div>
                  <h3 className="font-semibold text-white mb-2">Accessibility</h3>
                  <p className="text-gray-400 text-sm">Use proper labels, aria attributes, and ensure keyboard navigation works.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Form Submission Section */}
          <section>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-amber-400/10 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-amber-400" />
              </div>
              <h2 className="text-2xl font-semibold text-white">Form Submission & Multiple Inputs</h2>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Handle multiple inputs efficiently using a single state object and form submission:
              </p>
              <div className="bg-black/50 rounded-lg p-6 font-mono text-sm">
                <div className="text-amber-400 mb-2">// Multiple Inputs with Form Submission</div>
                <div className="space-y-1 text-gray-300">
                  <div><span className="text-blue-400">function</span> <span className="text-yellow-400">ContactForm</span>()</div>
                  <div className="pl-4 space-y-1">
                    <div><span className="text-blue-400">const</span> [<span className="text-white">formData</span>, <span className="text-white">setFormData</span>] = <span className="text-white">useState</span>(</div>
                    <div className="pl-4 space-y-1">
                      <div><span className="text-white">name</span>: <span className="text-green-400">''</span>,</div>
                      <div><span className="text-white">email</span>: <span className="text-green-400">''</span>,</div>
                      <div><span className="text-white">message</span>: <span className="text-green-400">''</span></div>
                    </div>
                    <div>);</div>
                    <div></div>
                    <div><span className="text-blue-400">const</span> <span className="text-white">handleChange</span> = (<span className="text-white">e</span>) =&gt;</div>
                    <div className="pl-4 space-y-1">
                     <div>
                        <span className="text-blue-400">const</span>{' '}
                        {'{'}<span className="text-white">name</span>,{' '}
                        <span className="text-white">value</span>{'}'} ={' '}
                        <span className="text-white">e.target</span>;
                        </div>
                        <div>
                        <span className="text-white">setFormData</span>(
                        <span className="text-white">prev</span> =&gt; (
                        {'{'}...<span className="text-white">prev</span>,{' '}
                        [<span className="text-white">name</span>]:{' '}
                        <span className="text-white">value</span>{'}'}
                        ));
                        </div>
                    </div>
                    <div></div>
                    <div><span className="text-blue-400">const</span> <span className="text-white">handleSubmit</span> = (<span className="text-white">e</span>) =&gt;</div>
                    <div className="pl-4 space-y-1">
                      <div><span className="text-white">e.preventDefault</span>();</div>
                      <div><span className="text-white">console.log</span>(<span className="text-green-400">'Form submitted:'</span>, <span className="text-white">formData</span>);</div>
                    </div>
                    <div></div>
                    <div><span className="text-blue-400">return</span> (</div>
                    <div className="pl-4 space-y-1">
                      <div>&lt;<span className="text-red-400">form</span> <span className="text-amber-400">onSubmit</span>={<span className="text-white">handleSubmit</span>}&gt;</div>
                      <div className="pl-4">&lt;<span className="text-red-400">input</span> <span className="text-amber-400">name</span>=<span className="text-green-400">"name"</span> <span className="text-amber-400">value</span>={<span className="text-white">formData.name</span>} <span className="text-amber-400">onChange</span>={<span className="text-white">handleChange</span>} /&gt;</div>
                      <div className="pl-4">&lt;<span className="text-red-400">input</span> <span className="text-amber-400">name</span>=<span className="text-green-400">"email"</span> <span className="text-amber-400">value</span>={<span className="text-white">formData.email</span>} <span className="text-amber-400">onChange</span>={<span className="text-white">handleChange</span>} /&gt;</div>
                      <div className="pl-4">&lt;<span className="text-red-400">button</span> <span className="text-amber-400">type</span>=<span className="text-green-400">"submit"</span>&gt;Submit&lt;/<span className="text-red-400">button</span>&gt;</div>
                      <div>&lt;/<span className="text-red-400">form</span>&gt;</div>
                    </div>
                    <div>);</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="flex justify-between items-center pt-16 border-t border-gray-800 mt-16">
          <button
            className="flex items-center space-x-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            onClick={() => (window.location.href = '/module-4/event-handling')}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-400">Page 3 of 3 • Module 4</div>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
            </div>
          </div>

          <button
            className="flex items-center space-x-2 px-6 py-3 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-300 transition-colors"
            onClick={() => (window.location.href = '/module-5/context')}
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputsPage;
