Search.setIndex({docnames:["data","data_example","index","multilabel_testing_example","ssl_example","testing","train","train_example","utils"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["data.rst","data_example.rst","index.rst","multilabel_testing_example.rst","ssl_example.rst","testing.rst","train.rst","train_example.rst","utils.rst"],objects:{"decavision.dataset_preparation":[[0,0,0,"-","data_augmentation"],[0,0,0,"-","generate_pseudolabels"],[0,0,0,"-","generate_tfrecords"]],"decavision.dataset_preparation.data_augmentation":[[0,1,1,"","DataAugmentor"]],"decavision.dataset_preparation.data_augmentation.DataAugmentor":[[0,2,1,"","generate_images"],[0,2,1,"","generate_images_single_class"]],"decavision.dataset_preparation.generate_pseudolabels":[[0,1,1,"","PseudoLabelGenerator"]],"decavision.dataset_preparation.generate_pseudolabels.PseudoLabelGenerator":[[0,2,1,"","generate_pseudolabel_data"],[0,2,1,"","move_unlabeled_images"],[0,2,1,"","plot_confidence_scores"]],"decavision.dataset_preparation.generate_tfrecords":[[0,1,1,"","TfrecordsGenerator"]],"decavision.dataset_preparation.generate_tfrecords.TfrecordsGenerator":[[0,2,1,"","convert_image_folder"]],"decavision.model_testing":[[5,0,0,"-","testing"]],"decavision.model_testing.testing":[[5,1,1,"","ModelTester"],[5,1,1,"","ModelTesterMultilabel"]],"decavision.model_testing.testing.ModelTester":[[5,2,1,"","classify_images"],[5,2,1,"","confusion_matrix"],[5,2,1,"","evaluate"],[5,2,1,"","generate_classification_report"],[5,2,1,"","plot_errors"]],"decavision.model_testing.testing.ModelTesterMultilabel":[[5,2,1,"","classify_images"],[5,2,1,"","create_movie"],[5,2,1,"","evaluate"],[5,2,1,"","generate_metrics"]],"decavision.model_training":[[6,0,0,"-","progressive_learning"],[6,0,0,"-","tfrecords_image_classifier"]],"decavision.model_training.progressive_learning":[[6,1,1,"","ProgressiveLearner"]],"decavision.model_training.progressive_learning.ProgressiveLearner":[[6,2,1,"","fit"],[6,2,1,"","hyperparameter_optimization"]],"decavision.model_training.tfrecords_image_classifier":[[6,1,1,"","ImageClassifier"]],"decavision.model_training.tfrecords_image_classifier.ImageClassifier":[[6,2,1,"","data_augment"],[6,2,1,"","fit"],[6,2,1,"","get_training_dataset"],[6,2,1,"","get_validation_dataset"],[6,2,1,"","hyperparameter_optimization"]],"decavision.utils":[[8,0,0,"-","colab_utils"],[8,0,0,"-","data_utils"],[8,0,0,"-","training_utils"],[8,0,0,"-","utils"]],"decavision.utils.colab_utils":[[8,3,1,"","authenticate_colab"],[8,3,1,"","download_dataset"]],"decavision.utils.data_utils":[[8,3,1,"","check_RGB"],[8,3,1,"","create_dir"],[8,3,1,"","download_dataset"],[8,3,1,"","prepare_image"],[8,3,1,"","print_download_progress"],[8,3,1,"","split_train"]],"decavision.utils.training_utils":[[8,1,1,"","CheckpointDownloader"],[8,3,1,"","custom_loss"],[8,3,1,"","f1_score"]],"decavision.utils.training_utils.CheckpointDownloader":[[8,2,1,"","__call__"]],"decavision.utils.utils":[[8,3,1,"","check_PU"],[8,3,1,"","check_sep"],[8,3,1,"","empty_folder"],[8,3,1,"","gcs_bucket"],[8,3,1,"","is_gcs"],[8,3,1,"","load_classes"],[8,3,1,"","load_model_clear"],[8,3,1,"","upload_file_gcs"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function"},terms:{"0":[1,2,5,6,8],"0001":6,"0005":6,"001":6,"1":[6,8],"10":[6,7],"100":1,"1024":6,"128":6,"16":[0,7],"2":[1,2,6],"20":6,"2021":2,"25":7,"255":8,"299":0,"3":[2,8],"32":0,"5":[2,5,6,8],"5464f9836c36":0,"6":2,"7z":8,"9":5,"boolean":[0,6],"case":[6,8],"class":[0,1,3,4,5,6,7,8],"default":[0,1,5,6,7],"do":[1,2,3],"export":2,"final":[2,3,4],"float":[0,6,8],"function":[0,3,5,6,7,8],"import":[4,7,8],"int":[0,5,6,8],"new":[0,1,3,4,5,6,7,8],"return":[0,5,6,8],"true":[0,1,3,4,5,6,7,8],"try":[4,6,7,8],"while":[0,1],A:[0,2,4,6],For:[0,1,4,7],If:[1,2,3,4,5,6,7,8],In:3,It:[1,2,8],Of:4,Such:4,The:[0,1,2,3,4,5,6,7,8],Their:7,Then:[1,3,4],There:[1,3,4,7],These:4,To:[3,4,5,7,8],With:[4,7],__call__:8,abl:3,about:[6,8],abov:2,access:8,accord:0,account:[1,8],accuraci:[2,5,6,7],achiev:[2,4,7],acm:2,activ:[6,7,8],ad:[6,8],add:[2,6],addit:7,after:[6,7,8],aicanada:2,aim:6,algorithm:7,all:[0,1,2,4,5,6,7,8],allow:8,along:[2,4],alreadi:[3,4,5,6,7],also:[0,1,2,3,4,5,6,7],amd:8,amount:6,an:[0,1,2,3,4,6,7,8],ani:[1,2,6,7],anyth:[0,8],api:2,approach:[2,5],approxim:0,ar:[0,1,2,3,4,5,6,7,8],argument:[1,3,7],arrai:8,art:2,ask:8,asphalt:1,assess:8,associ:5,assum:3,attach:6,augment:[2,4,6,7],augmentor:[0,1,2],authent:[1,6,8],authenticate_colab:8,automat:7,avail:[0,2,5,6],averag:5,away_horizon:1,b0:[6,7],b3:[4,6,7],b5:[4,6,7],b7:[6,7],back:6,bad:4,badminton_court:1,bar:0,barn:1,base:[0,2,6],batch:[0,6],batch_siz:[0,6,7],batchnorm:6,becaus:[0,1],been:2,begin:8,being:[0,1],below:0,best:[4,6,7],better:[1,7],between:[0,1,7],blob:8,block:6,block_siz:8,blog:[2,6],bool:[0,5,6,8],both:[0,4],bright:[0,1,6],bs:6,bucket:[1,7,8],bucketnam:8,build:[0,2,4,7],built:2,calcul:5,call:[2,4,8],callback:[7,8],can:[0,1,2,3,4,5,6,7,8],capit:2,categori:[0,3,4,5,8],chang:6,chart:4,check:8,check_pu:8,check_rgb:8,check_sep:8,checkoint:6,checkpoint:[6,7,8],checkpoint_path:8,checkpointdownload:8,choos:1,class_size_approxim:0,classif:[0,1,2,5,8],classifi:[2,4,5,7],classified_imag:3,classified_image_path:3,classified_path:3,classify_imag:[3,5],clear:8,close:1,cloud:[1,2,7,8],code:[0,1,2,3,4,5,6,7,8],colab:[1,2,7],colab_util:8,color:[0,1],column:5,com:[0,2,8],combin:[0,1,4,6,7],come:[1,4],compos:4,compress:8,comput:[5,8],concept:2,condit:5,confer:2,confid:0,confus:[2,5],confusion_matrix:5,connect:8,consid:2,consist:4,contact:2,contain:[0,2,5,6,8],content:[0,6,8],context:4,continu:7,contrast:[0,1],control:8,convert:[0,8],convert_image_fold:[0,1],copi:[4,8],correctli:5,correspond:0,could:[3,8],count:8,cours:4,cpu:8,creat:[0,1,2,4,5,8],create_dir:8,create_movi:[3,5],csail:8,csv:[0,1,4,7,8],csv_filenam:0,current:8,custom_loss:8,data:[2,3,4,6,7],data_aug:6,data_augment:[0,1,6],data_prepar:6,data_util:[1,8],dataaugmentor:[0,1],dataset:[2,3,4,5,6,7,8],dataset_prepar:[0,1,4],decathlon:2,decathlondevelop:2,decavis:[0,1,3,4,5,6,7,8],decavision_dataset_prepar:1,decid:[6,7],delet:[0,1,8],dens:6,depend:2,describ:[0,2,4],design:2,desir:[0,1,8],detail:[0,5,6,8],determin:[7,8],differ:[1,3,4,6,7],dill:2,dimens:8,directli:[0,3,4,5],directori:[1,3,6,7,8],dirt:1,disabl:5,discard:[0,4],discuss:2,distil:8,distinct:2,distinguish:2,distort:[0,1],distribut:4,divid:8,document:7,doe:[4,7,8],domin:8,don:[1,2,7],done:[1,3,4,6,7],doubl:6,download:8,download_dataset:8,download_dir:8,drive:[7,8],dropout:[6,7],dure:[0,1,6,7,8],each:[0,1,4,5,6,8],eager:5,earlystop:7,easili:[2,8],edu:8,effcientnet:7,effici:2,efficientnet:[2,4,6],efficientnetv2:[6,7],either:7,els:8,empty_fold:8,end:6,ensur:4,environ:2,epoch:[6,7],error:5,evalu:[2,5],everi:7,everyth:8,exactli:4,exampl:[0,1,3,4,5,6,7],execut:5,exist:[0,1,4,8],explain:[2,7],explicit:2,explicitli:3,exploit:4,export_model:[6,7],extens:[6,7,8],extra:[6,7,8],extract:[3,6,8],f1:[3,5,8],f1_score:8,fail:8,fals:[0,3,4,5,6,7,8],far:1,featur:2,feed:8,few:[2,4,7],file:[0,2,4,5,7,8],file_id:8,file_path:8,filenam:[0,1,6,7],filenumb:6,find:[2,6,7],fine:[2,6,7],fine_tun:6,first:[1,2,3,4,5,6,8],fit:[6,7],flip:6,flip_horizont:[0,1],flip_vert:[0,1],fly:[3,7],focus:8,folder:[0,1,3,4,5,6,8],follow:[0,1,2,3,4,5,6,7,8],forc:8,form:[6,8],format:[0,6,7,8],found:[0,6,7],fraction:[1,8],fresh:2,from:[0,2,4,5,6,7,8],full:8,further:4,futur:7,gc:[1,8],gcp:8,gcp_path:8,gcs_bucket:8,gener:[2,7],generate_classification_report:5,generate_imag:[0,1],generate_images_single_class:0,generate_metr:[3,5],generate_pseudolabel:[0,4],generate_pseudolabel_data:[0,4],generate_tfrecord:[0,1,6],get:1,get_training_dataset:6,get_validation_dataset:6,github:[0,8],given:[2,6,8],go:[1,6],googl:[0,2,6,7,8],gpu:[1,8],graph:0,grass:1,great:2,gs:[1,8],gs_folder:3,gz:8,h5:[0,4,6,7,8],ha:[2,6,7],hand:4,hardli:1,have:[1,2,3,5,7],height:0,help:4,here:2,hesit:2,hi:8,hidden_s:[6,7],high:[2,8],higher:2,highest:[0,4],hockei:1,hockey_play:1,hockey_player_1:1,hockey_player_2:1,hold:0,how:[0,1,2,3,4,6,7,8],howev:1,http:[0,2,6,8],hvass:8,hyperparamet:[2,6,8],hyperparameter_optim:[6,7],hyperparameters_dimens:6,hyperparmat:2,id:[5,8],ideal:4,imag:[0,2,5,7,8],image_dataset:[0,1,3,4,8],image_fold:5,image_path:[5,8],imageclassifi:[6,7],img_fold:[0,1],img_folder_new:0,implement:6,improv:[0,2,6],incept:6,inception_resnet:[6,7],includ:[0,2,8],include_top:8,increas:[1,4,8],inform:[6,8],ingredi:4,input:6,input_shap:6,inspir:[0,8],intact:4,integr:2,internet:8,is_gc:8,issu:2,iter:[2,6,7,8],its:[6,8],jpg:[1,3],json:[0,1,3,5],json_fil:[3,5],json_path:0,just:[1,3],keep:4,kei:[0,1],kept:4,kera:[0,2,6,8],l2:6,l2_lambda:[6,7],l:[6,7,8],lab:8,label:[1,2,3,5,6,8],larg:2,larger:4,last:[4,6,7,8],layer:[6,7,8],learn:[0,2,4,7,8],learning_r:[6,7],learning_rate_fine_tun:[6,7],left:6,leverag:2,librari:[1,2,3,4,5,6,7,8],like:[0,1],line:8,link:8,list:[0,1,3,5,8],load:8,load_class:[3,8],load_model_clear:8,local:[0,8],locat:[0,1,5,6,8],log:[6,7],look:3,lose:[6,7],loss:8,low:[4,8],m:[6,7],machin:8,made:[1,2,4],main:[0,4],make:[2,3,4,7],man:1,mani:[7,8],manual:7,master:8,matplotlib:2,matrix:[2,5],maximum:5,mb:1,mdbloic:0,mean:4,medium:[0,2],method:[2,4,7],metric:[5,7,8],min_accuraci:6,mind:4,mit:8,mmsport:2,model:[0,1,2,8],model_nam:3,model_path:[0,6],model_test:[3,5],model_train:[6,7],modeltest:5,modeltestermultilabel:[3,5],modifi:1,modul:2,more:[4,8],moritzkrg:0,most:[2,4,7],move:[0,1,8],move_imag:[0,4],move_unlabeled_imag:[0,4],movi:[2,5],much:[6,8],multil:6,multilabel:[0,1,2,5,7,8],multipl:[1,6],must:[0,1,5,6,7,8],n_random_start:[6,7],name:[0,1,6,7,8],natural_light:1,necessari:4,necessarili:4,need:[0,1,2,3,5,7],net:2,network:[0,2,8],neural:[0,2,8],neuron:6,new_logit:8,newli:1,next:3,nl:6,no_horizon:1,non:6,none:[0,4,5,6,8],normal:[5,6,8],note:[4,7],notebook:[2,8],num_iter:[6,7],num_pictur:5,number:[0,1,5,6,8],numberofimag:6,numpi:[2,8],object:8,observ:6,off:6,old:[1,6,8],old_class:8,old_logit:8,onc:[1,7],one:[1,2,4,6,8],onli:[0,1,4,5,6,7],onlin:1,open:8,open_area:1,opim:6,optim:[2,4,6,8],optimizeresult:8,option:[0,1,3,7],order:[2,3],org:6,organ:1,origin:[0,4],os:8,other:[4,6,8],otherwis:[5,7],our:2,output:[0,1,4],output_fold:[0,1],over:5,overal:0,own:4,packag:2,panda:2,paper:2,paramet:[0,5,6,7,8],part:[2,8],pass:3,past:7,path:[0,1,3,5,6,8],patienc:6,patool:2,pb:[6,7],per:[0,8],per_class:[0,4],perform:[0,1,2,4,5,6,7],pick:[1,4],pickl:6,pillow:2,pip:2,pipelin:[2,6],pixel:[6,8],pkl:7,place:[1,3,4,8],places365:8,places365standard_easyformat:8,player:1,plot:[0,2,4,5],plot_confid:[0,4],plot_confidence_scor:[0,4],plot_error:5,point:4,popul:5,possibl:[0,1,4,6,7],post:2,potenti:[5,6,8],precis:5,pred:5,predict:[0,3,4,5,8],prefix:8,preliminari:2,prepar:[1,2],prepare_imag:8,presenc:8,present:[0,2,6],pretrain:[2,6,7],previou:[6,7],previous:4,print:[5,8],print_download_progress:8,prior:7,probabl:4,problem:[0,2,4],procedur:[2,4],process:[6,8],progress:[0,2,7,8],progressive_learn:6,progressivelearn:6,provid:[2,5,6,8],pseudo:2,pseudo_data_path:0,pseudolabelgener:[0,4],pull:2,purpos:0,put:8,py:8,pypi:2,python:2,pyunpack:2,qualiti:4,question:2,quick:2,random:[6,7],random_crop:[0,1],random_eras:[0,1],randomli:[1,6,8],rate:[6,7],ratio:6,raw:0,re:8,reach:[0,2],read:0,recal:5,recent:2,recogn:4,recommend:[1,6],record:1,reduc:7,refer:[6,7],regard:2,regular:6,relev:4,rememb:8,report:[2,5],request:2,requir:[1,2,8],rescal:8,reshap:0,resiz:[0,1,7,8],resnet:[6,7],respect:7,rest:8,restart:7,restor:6,result:[0,5,7],rgb:8,right:8,rotat:[0,1],round:6,routin:8,row:5,rule:7,run:[1,3,7,8],s:[6,7],safer:2,sai:3,same:[0,4],satisfi:7,satur:6,save:[0,1,2,4,5,6,8],save_img:[3,5],save_model:[6,7],save_path:8,save_result:6,scale:2,scikit:[2,6,7,8],scipi:8,score:[3,5,8],scratch:[0,2,3,4,7],seaborn:2,seamlessli:2,second:[2,6],see:6,select:7,semi:[0,2,4],separ:[1,2,5,6,8],seri:7,session:8,set:[2,3,5,7,8],shape:[6,8],shard:[0,1],shear:[0,1],should:[1,3,4],show:[1,2,3,4,5,6,7],shuffl:6,similar:5,simplest:3,sinc:4,singl:[0,1,4,5],size:[0,1,6,7,8],skew:[0,1],skip:4,sky:1,small:2,smaller:6,so:[2,3,4,6,7],soccer:1,soccer_play:1,soccer_player_1:1,soccer_player_2:1,soil:1,some:[4,5,6],someon:8,sourc:1,specif:[2,7],specifi:[0,1,3,5,6,7,8],speed:0,split:[0,2,4,8],split_train:[1,8],sport:2,ssl:2,start:[6,7],state:[2,8],step:[2,6],stop:6,storag:[0,2,6,8],store:[0,1,8],str:[0,5,6,8],string:8,strongli:0,structur:[3,7],student:2,subdirectori:8,subfold:[0,8],suffici:6,suggest:2,sun_aaabhshfqutsklcz:3,sun_aabeeufygtjcsego:[1,3],sun_aabmvnjgiecutfpx:1,sun_aaclfhnpacadfwfc:1,supervis:[0,2,4],sure:[4,7],swish:6,t:[0,1,2,7,8],tar:8,target:1,target_height:0,target_s:[0,8],target_width:0,teacher:4,tech:6,temp:8,temperatur:8,tensor:8,tensorboard:[6,7],tensorflow:[0,2,6,8],test:[1,2,8],tester:3,tf:[6,8],tfrec:[6,7],tfrecord:[2,6,7],tfrecords_dataset:0,tfrecords_fold:[6,7],tfrecords_image_classifi:[6,7],tfrecords_train:7,tfrecords_v:7,tfrecordsgener:[0,1],tfserv:7,tgz:8,th:6,than:6,thei:[0,8],them:[0,1,3,8],thi:[0,1,2,3,4,5,6,7,8],those:5,three:5,threshold:[0,4,5],through:[1,2],thu:4,time:6,too:[4,6],tool:[3,6],top:[2,7],total:[0,6,7],total_s:8,tpu:[0,1,2,5,7,8],train:[0,2,3,5],train_data_path:0,train_ssl:0,training_util:8,transfer:[2,6,7],transfer_model:[6,7],transform:[0,1],transit:2,tree:1,tri:[6,7],tune:[2,6,7],tupl:[0,6,8],tutori:[6,8],two:[0,2,3,7],type:[0,2,6,8],under:3,unfrozen:6,unlabel:2,unlabeled_path:0,unless:6,until:0,up:0,updat:[2,3,6,8],upload:[7,8],upload_file_gc:8,url:8,us:[0,1,2,3,5,6,7,8],user:8,util:[1,2,3],v2:[6,7],val:[0,1,3,6,7,8],valid:[2,5,6,7,8],valu:[0,1,7],vari:6,variabl:4,variat:7,variou:[2,5,7],verbos:[6,7],version:[2,3],virtual:2,vision:2,wa:[2,4,6],wai:[2,3],want:[0,1,4,7],we:[7,8],well:8,were:5,what:[2,8],when:[4,5,6,7,8],where:[0,3,4,6,8],whether:[0,6,8],which:[0,1,2,3,4,6,8],whole:6,width:0,window:8,with_test:8,without:[3,6,8],work:[2,5,6,7,8],would:1,wouterbulten:6,www:6,xception:[6,7],xl:6,y_pred:8,y_true:8,you:[1,2,3,4,5,7],your:[1,4,7,8],zero:6,zip:8},titles:["Preparing datasets","Build a dataset from scratch","Welcome to DecaVision\u2019s documentation!","Testing Multilabel image classification model","Improve a classification model using unlabelled images","Model testing","Train models","Train and optimize model","Utils"],titleterms:{"export":7,"function":2,augment:[0,1],build:1,classif:[3,4,6,7],classifi:3,colab:8,confus:3,content:2,creat:3,data:[0,1,8],dataset:[0,1],decavis:2,document:2,evalu:3,exampl:2,file:1,from:[1,3],gener:[0,1,3,4],hyperparamet:7,imag:[1,3,4,6],improv:4,includ:6,instal:2,kera:7,label:[0,4],learn:6,make:[0,1],matrix:3,model:[3,4,5,6,7],movi:3,multilabel:[3,6],note:3,optim:7,plot:3,preliminari:4,prepar:0,progress:6,pseudo:[0,4],report:3,roadmap:2,s:2,save:[3,7],scratch:1,set:1,split:1,step:4,student:4,support:2,test:[3,5],tfrecord:[0,1],train:[1,4,6,7,8],unlabel:[0,4],us:4,util:8,valid:1,welcom:2}})