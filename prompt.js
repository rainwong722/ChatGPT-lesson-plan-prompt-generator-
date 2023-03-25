function generatePrompt() {
    var gradeLevel = document.getElementById("grade_level").value;
    var subjectArea = document.getElementById("subject_area").value;
    var topic = document.getElementById("topic").value;
    var learningObjectives = document.getElementById("learning_objectives").value;
    var assessmentGoals = document.getElementById("assessment_goals").value;
    var teachingStrategies = document.getElementById("teaching_strategies").value;
    var studentInterests = document.getElementById("student_interests").value;
    var lessonDuration = document.getElementById("lesson_duration").value;

    var prompt = "Hello ChatGPT, can you help me create a lesson plan";
    
    if (gradeLevel) {
        prompt += " for " + gradeLevel + " " + subjectArea;
    }
    
    if (topic) {
        prompt += " class on the topic of " + topic;
    }
    
    if (learningObjectives) {
        prompt += "? The learning objectives for this lesson are " + learningObjectives;
    }
    
    if (assessmentGoals) {
        prompt += ", and the assessment goals are " + assessmentGoals;
    }
    
    if (teachingStrategies) {
        prompt += ". I would like to use " + teachingStrategies + " to engage the students";
    }
    
    if (studentInterests) {
        prompt += " and incorporate their " + studentInterests;
    }
    
    if (lessonDuration) {
        prompt += ". The duration of the lesson is " + lessonDuration + ".";
    }
    
    prompt += " Can you provide me with resources, including videos, diagrams, and reading materials, that can support the lesson plan?";
    
    document.getElementById("prompt").innerHTML = prompt;
}
