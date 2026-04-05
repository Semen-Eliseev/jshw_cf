import { FlatCompat } from "@eslint/eslintrc";
const compat = new FlatCompat({ 
  /* legacy shareable configs compatibility */ 
});
export default [  
  // базовая конфигурация окружений и парсер опций  
  {    
    languageOptions: 
    {      
      parserOptions: {        
        ecmaVersion: 2024,        
        sourceType: "module",        
        ecmaFeatures: { jsx: true }      
      },      
    },     
  },
  {    
    rules: {      
      "indent": ["error", 4, {        
        "SwitchCase": 1,        
        "VariableDeclarator": 1,        
        "outerIIFEBody": 1,        
        "MemberExpression": 1,        
        "FunctionDeclaration": { "parameters": "first" },        
        "FunctionExpression": { "parameters": "first" },       
        "CallExpression": { "arguments": "first" },        
        "ignoredNodes": ["TemplateLiteral *"],        
        "flatTernaryExpressions": false      
      }],      
      "linebreak-style": ["error", "unix"],      
      "quotes": ["error", "single", { "avoidEscape": true }],      
      "semi": ["error", "always"]    
    }  
  }];